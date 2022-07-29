import { render, screen } from "@testing-library/react";
import React from "react";
import Success from "./index";
import "@testing-library/jest-dom";

describe("Success", () => {
  it("should render Success element", () => {
    render(
      <Success
        text="Sell is completed, please check your balance in your Rupee coin"
        button1="SELL NOW"
        button2="GO TO USD COIN"
      />
    );
    const inputElement = screen.getByRole("Success");
    expect(inputElement).toBeInTheDocument();
  });
});
