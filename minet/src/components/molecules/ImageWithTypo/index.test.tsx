import { render, screen } from "@testing-library/react";
import React from "react";
import ImageWithTypo from "./index";
import "@testing-library/jest-dom";
import explore from "../../../assets/explore.png";

describe("ButtonList", () => {
  it("should render Image with Typo element", () => {
    render(
      <ImageWithTypo image={explore} value1="Bitcoin" value2="0.0234510 BTC" />
    );
    const inputElement = screen.getByRole("ImageWithTypo");
    expect(inputElement).toBeInTheDocument();
  });
});
