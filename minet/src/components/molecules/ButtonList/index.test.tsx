import { render, screen } from "@testing-library/react";
import React from "react";
import ButtonList from "./index";
import "@testing-library/jest-dom";
import explore from "../../../assets/explore.png";

describe("ButtonList", () => {
  it("should render Button list", () => {
    render(<ButtonList />);
    const inputElement = screen.getByRole("buttonList");
    expect(inputElement).toBeInTheDocument();
  });
});
