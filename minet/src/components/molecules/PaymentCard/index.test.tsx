import { render, screen } from "@testing-library/react";
import React from "react";
import PaymentCard from "./index";
import "@testing-library/jest-dom";

describe("ButtonList", () => {
  it("should render Payment card element", () => {
    render(<PaymentCard />);
    const inputElement = screen.getByRole("PaymentCard");
    expect(inputElement).toBeInTheDocument();
  });
});
