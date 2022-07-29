import { render, screen } from "@testing-library/react";
import React from "react";
import Asset from "./index";
import "@testing-library/jest-dom";
import graph from "../../../assets/graph.png";
import explore from "../../../assets/explore.png";

describe("ButtonCard", () => {
  it("should render Asset element", () => {
    render(
      <Asset
        cryptoImage={explore}
        cryptoItem="Bitcoin"
        price="$3,00,439.93"
        graph={graph}
      />
    );
    const inputElement = screen.getByRole("assetCard");
    expect(inputElement).toBeInTheDocument();
  });
});
