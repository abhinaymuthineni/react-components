import { render, screen } from "@testing-library/react";
import React from "react";
import PurchaseSuccess from "./index";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("Purchase Success", () => {
  it("should render Purchase Success element", () => {
    render(
      <Router>
        <PurchaseSuccess />
      </Router>
    );
    const inputElement = screen.getByText(
      "Purchase is completed, please check your balance in your crypto wallet"
    );
    expect(inputElement).toBeInTheDocument();
  });
});
