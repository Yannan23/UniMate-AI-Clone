import path from 'path'
import process from 'process'

const buildEslintCommand = (filePaths) =>
  `next lint --file ${filePaths
    .map((filePath) => path.relative(process.cwd(), filePath))
    .join(' --file ')}`

const config = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{ts,tsx}': () => 'npx tsc -p tsconfig.json --noEmit',
  '*.{js,mjs,jsx,ts,tsx,json,css,md}': ['npx prettier --check'],
}

export default config
