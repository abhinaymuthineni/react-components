import { render, screen } from "@testing-library/react";
import React from "react";
import PaymentMethod from "./index";
import "@testing-library/jest-dom";

describe("PaymentMethod", () => {
  it("should render PaymentMethod element", () => {
    render(<PaymentMethod />);
    const inputElement = screen.getByRole("PaymentMethod");
    expect(inputElement).toBeInTheDocument();
  });
});
