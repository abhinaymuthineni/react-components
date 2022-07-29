import { render, screen } from "@testing-library/react";
import React from "react";
import Balance from "./index";
import "@testing-library/jest-dom";

describe("Balance", () => {
  it("should render Balance element", () => {
    render(<Balance />);
    const inputElement = screen.getByRole("Balance");
    expect(inputElement).toBeInTheDocument();
  });
});
