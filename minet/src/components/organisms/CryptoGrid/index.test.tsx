import { render, screen } from "@testing-library/react";
import React from "react";
import CryptoGrid from "./index";
import "@testing-library/jest-dom";

describe("CryptoGrid", () => {
  it("should render crypto items", () => {
    render(<CryptoGrid />);
    const inputElement = screen.getByRole("CryptoGrid");
    expect(inputElement).toBeInTheDocument();
  });
});
