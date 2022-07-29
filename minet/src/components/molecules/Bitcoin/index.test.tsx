import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CryptoCard from "./index";
import "@testing-library/jest-dom";
import explore from "../../../assets/explore.png";
import { GetSelectedItems } from "../../../service/index";

describe("ButtonCard", () => {
  it("should render Bitcoin element", () => {
    render(
      <CryptoCard
        id={1}
        image={explore}
        title="Bitcoin"
        price="$3,406,069.54"
      />
    );
    const inputElement = screen.getByRole("cryptoCard");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render Bitcoin element", () => {
    render(
      <CryptoCard
        id={1}
        image={explore}
        title="Bitcoin"
        price="$3,406,069.54"
      />
    );
    const buttonElement = screen.getByRole("cryptoCard");
    fireEvent.click(buttonElement);
    GetSelectedItems().then((res) => {
      const length = res.data.length;
    });

    expect(length == 1);
  });
});
