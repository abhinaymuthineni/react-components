import { render, screen } from "@testing-library/react";
import React from "react";
import TimePeriod from "./index";
import "@testing-library/jest-dom";

describe("TimePeriod", () => {
  it("should render Time period element", () => {
    render(<TimePeriod />);
    const inputElement = screen.getByRole("TimePeriod");
    expect(inputElement).toBeInTheDocument();
  });
});
