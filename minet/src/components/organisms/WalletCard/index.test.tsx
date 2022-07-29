import { render, screen } from "@testing-library/react";
import React from "react";
import Wallet from "./index";
import "@testing-library/jest-dom";

describe("Wallet", () => {
  it("should render Wallet element", () => {
    render(<Wallet />);
    const inputElement = screen.getByRole("Wallet");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render Wallet element", () => {
    render(<Wallet />);
    const inputElement = screen.getByRole("Wallet");
    const portfolio = inputElement.getElementsByTagName("PortfolioCard");
    expect(portfolio).size == 1;
  });
});
