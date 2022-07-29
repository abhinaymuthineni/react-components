import { render, screen } from "@testing-library/react";
import React from "react";
import ButtonCard from "./ButtonCard";
import "@testing-library/jest-dom";
import img from "../../../assets/avatar.png";
import Typo from "../../atoms/Typo/index";

describe("ButtonCard", () => {
  it("should render Amount element", () => {
    render(
      <ButtonCard
        label="$34,000.00"
        Atom={<Typo component="div" text="USD coin" />}
      />
    );
    const inputElement = screen.getByRole("amountCard");
    expect(inputElement).toBeInTheDocument();
  });
});
