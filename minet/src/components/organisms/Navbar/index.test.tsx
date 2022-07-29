import { render, screen } from "@testing-library/react";
import React from "react";
import Navbar from "./index";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("should render Navbar element", () => {
    render(<Navbar heading="Checkout" />);
    const inputElement = screen.getByRole("Navbar");
    expect(inputElement).toBeInTheDocument();
  });
});
