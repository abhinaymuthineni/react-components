import { render, screen } from "@testing-library/react";
import React from "react";
import PaymentPage from "./index";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("PaymentPage", () => {
  it("should render PaymentPage element", () => {
    render(
      <Router>
        <PaymentPage />
      </Router>
    );
    const inputElement = screen.getByRole("PaymentPage");
    expect(inputElement).toBeInTheDocument();
  });
});
