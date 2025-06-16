# UniMate AI

UniMate AI is an AI-native learning assistant designed specifically for international students in Australia and around the world.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **UI Library**: React 19.0.0
- **Language**: TypeScript
- **Testing**: Vitest + Testing Library

## 📦 Getting Started

### Prerequisites

- **Node.js 22+** (recommended: use nvm for version management)
- **npm 10+**

### Node.js Version Management

This project requires Node.js 22 or higher. We recommend using nvm to manage Node.js versions:

1. **Install nvm** (if not already installed):

```bash
# macOS/Linux
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Windows (use nvm-windows)
Download from: https://github.com/coreybutler/nvm-windows/releases
```

2. **Install and use Node.js 22**:

```bash
nvm install 22
nvm use 22
```

3. **Set Node.js 22 as default** (optional):

```bash
nvm alias default 22
```

4. **Verify the version**:

```bash
node --version  # Should show v22.x.x
npm --version   # Should show 10.x.x or higher
```

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd unimate-ai
```

2. **Switch to the correct Node.js version** (if using nvm):

```bash
nvm use
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing

This project uses Vitest with Testing Library for comprehensive testing:

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

### Test Structure

- **Test files**: Located alongside components (colocated)
- **Setup**: `vitest.setup.ts` for global test configuration
- **Configuration**: `vitest.config.ts` for Vitest settings

### Testing Features

- **Component testing** with React Testing Library
- **Accessibility testing** with proper ARIA attributes
- **User interaction testing** with user-event
- **Mocking** for Next.js router and components

## 📁 Project Structure

```
unimate-ai/
├── src/
│   └── app/                 # Next.js App Router
│       ├── page.tsx        # Home page component
│       ├── page.test.tsx   # Page component tests
│       ├── layout.tsx      # Root layout
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── .nvmrc                  # Node.js version specification for nvm
├── .npmrc                  # npm configuration with engine-strict
├── postcss.config.mjs      # PostCSS configuration
├── vitest.config.ts        # Vitest configuration
├── vitest.setup.ts         # Vitest setup
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm test             # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:ui      # Run tests with UI interface

# Linting
npm run lint         # Check code
npm run lint:fix     # Auto fix issues

```

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Vitest Documentation](https://vitest.dev/) - learn about Vitest testing
- [Testing Library Documentation](https://testing-library.com/) - learn about Testing Library
- [React 19 Documentation](https://react.dev/) - learn about React 19 features

## 🤝 Contributing

1. Follow the established code style and patterns
2. Write tests for new features
3. Ensure accessibility standards are met
4. **Use Node.js 22+ and follow the engine-strict configuration**
5. **Run `nvm use` before starting development to ensure version consistency**

---
