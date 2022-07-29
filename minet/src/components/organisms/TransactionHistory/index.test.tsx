import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import FunctionalGrid from "./index";
import "@testing-library/jest-dom";
import mockAxios from "axios";

const mockFunction = mockAxios.get;
describe("FunctionalGrid", () => {
  it("should render FunctionalGrid element", () => {
    render(<FunctionalGrid />);
    const inputElement = screen.getByRole("FunctionalGrid");
    expect(inputElement).toBeInTheDocument();
  });
});
