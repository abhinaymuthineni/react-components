import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SpeedDelivery from "./index";
import "@testing-library/jest-dom";

describe("SpeedDelivery", () => {
  it("should render SpeedDelivery element", () => {
    render(<SpeedDelivery />);
    const inputElement = screen.getByRole("SpeedDelivery");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeTruthy();
  });

  it("should render SpeedDelivery element with Instant button", () => {
    render(<SpeedDelivery />);
    const buttonElement = screen.getByRole("InstantButton");
    fireEvent.click(buttonElement);
    const textElements = screen.getAllByText("Instant: 2-5 minutes");
    expect(textElements).size == 2;
    expect(textElements).toBeTruthy();
  });

  it("should render SpeedDelivery element with Faster button", () => {
    render(<SpeedDelivery />);
    const buttonElement = screen.getByRole("FasterButton");
    fireEvent.click(buttonElement);
    const textElements = screen.getAllByText("Faster : 4 hours");
    expect(textElements).size == 2;
    expect(textElements).toBeTruthy();
  });

  it("should render SpeedDelivery element with Fast button", () => {
    render(<SpeedDelivery />);
    const buttonElement = screen.getByRole("FastButton");
    fireEvent.click(buttonElement);
    const textElements = screen.getAllByText("Fast : 120 hours");
    expect(textElements).size == 2;
    expect(textElements).toBeTruthy();
  });

  it("should render SpeedDelivery element with None button", () => {
    render(<SpeedDelivery />);
    const buttonElement = screen.getByRole("NoneButton");
    fireEvent.click(buttonElement);
    const textElements = screen.getAllByText("None");
    expect(textElements).size == 2;
    expect(textElements).toBeTruthy();
  });
});
