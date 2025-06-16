import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Home from "./page";

test("renders homepage", () => {
  render(<Home />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
