import { render, screen } from "@testing-library/react";
import React from "react";
import PaymentSuccess from "./index";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("PaymentSuccess", () => {
  it("should render PaymentSuccess element", () => {
    render(
      <Router>
        <PaymentSuccess />
      </Router>
    );
    const inputElement = screen.getByText(
      "Sell is completed, please check your balance in your Rupee coin"
    );
    expect(inputElement).toBeInTheDocument();
  });
});
