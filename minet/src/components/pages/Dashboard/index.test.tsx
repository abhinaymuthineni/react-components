import { render, screen } from "@testing-library/react";
import React from "react";
import Dashboard from "./index";
import "@testing-library/jest-dom";

describe("Dashboard", () => {
  it("should render Dashboard element", () => {
    render(<Dashboard />);
    const inputElement = screen.getByRole("Dashboard");
    expect(inputElement).toBeInTheDocument();
  });
});
