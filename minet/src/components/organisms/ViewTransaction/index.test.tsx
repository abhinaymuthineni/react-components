import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import React from "react";
import Transaction from "./index";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("Transaction", () => {
  it("should render Transaction element", () => {
    render(
      <Router>
        <Transaction
          transaction="You are buying"
          label11="Paying through"
          label12="Bitcoin Wallet"
          label21="Delivery fees"
          label22="0.001BTC"
          label31="Deposit to"
          label32="Rupee coin"
          button="SELL NOW"
        />
      </Router>
    );
    const inputElement = screen.getByRole("Transaction");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeTruthy();
  });
});
