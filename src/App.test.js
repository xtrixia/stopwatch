import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders ui", () => {
  render(<App />);
  // check button `Start` to be exist
  expect(screen.getByText("Start", { exact: true }));
  // check button `Reset` to be exist
  expect(screen.getByText("Reset", { exact: true }));
});
