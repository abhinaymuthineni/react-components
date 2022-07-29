import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Typo from "./index";

describe("CustomTypo", () => {
  test("should render CustomTypo element", () => {
    render(<Typo component="div" text="Hi" />);
    const inputElement = screen.getByText(/Hi/i);
    expect(inputElement).toBeInTheDocument();
  });
});
