import { render, screen } from "@testing-library/react";
import React from "react";
import AmountDetails from "./index";
import "@testing-library/jest-dom";

describe("AmountDetails", () => {
  it("should render Amount details element", () => {
    render(
      <AmountDetails
        buttonval="Sell max"
        value="USD coin(cash)"
        price="0.0234510 "
        quantity="$34,000.00"
      />
    );
    const inputElement = screen.getByRole("amountDetails");
    expect(inputElement).toBeInTheDocument();
  });
});
