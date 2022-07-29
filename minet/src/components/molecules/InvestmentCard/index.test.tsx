import { render, screen } from "@testing-library/react";
import React from "react";
import InvestmentCard from "./index";
import "@testing-library/jest-dom";
import image from "../../../assets/investment.png";

describe("ButtonList", () => {
  it("should render Investment card element", () => {
    render(
      <InvestmentCard title="Investment" price="$34,000.00" image={image} />
    );
    const inputElement = screen.getByRole("InvestmentCard");
    expect(inputElement).toBeInTheDocument();
  });
});
