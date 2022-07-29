import { render, screen } from "@testing-library/react";
import React from "react";
import Discover from "./index";
import "@testing-library/jest-dom";

describe("Discover", () => {
  it("should render Discover element", () => {
    render(<Discover />);
    const inputElement = screen.getByRole("Discover");
    expect(inputElement).toBeInTheDocument();
  });
});
