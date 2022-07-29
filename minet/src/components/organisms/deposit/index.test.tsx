import { render, screen } from "@testing-library/react";
import React from "react";
import Deposit from "./index";
import "@testing-library/jest-dom";

describe("Deposit", () => {
  it("should render deposit element", () => {
    render(<Deposit />);
    const inputElement = screen.getByRole("deposit");
    expect(inputElement).toBeInTheDocument();
  });
});
