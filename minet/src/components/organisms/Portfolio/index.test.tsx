import { render, screen } from "@testing-library/react";
import React from "react";
import Portfolio from "./index";
import "@testing-library/jest-dom";

describe("Portfolio", () => {
  it("should render Portfolio element", () => {
    render(<Portfolio />);
    const inputElement = screen.getByRole("Portfolio");
    expect(inputElement).toBeInTheDocument();
  });
});
