import { render, screen } from "@testing-library/react";
import React from "react";
import TransactionCard from "./index";
import "@testing-library/jest-dom";
import sold from "../../../assets/sold.png";

describe("Tran", () => {
  it("should render Transaction card element", () => {
    render(<TransactionCard image={sold} title="Bitcoin" />);
    const inputElement = screen.getByRole("TransactionCard");
    expect(inputElement).toBeInTheDocument();
  });
});
