import { render, screen } from "@testing-library/react";
import React from "react";
import PortfolioCard from "./index";
import "@testing-library/jest-dom";
import image from "../../../assets/explore.png";

describe("PortfolioCard", () => {
  it("should render Portfolio card element", () => {
    render(
      <PortfolioCard
        image={image}
        cryptoItem="Bitcoin"
        group="BTC"
        price="$34,000.00"
        profit="-1.3%"
      />
    );
    const inputElement = screen.getByRole("PortfolioCard");
    expect(inputElement).toBeInTheDocument();
  });
});
