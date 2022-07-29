import { render, screen } from "@testing-library/react";
import React from "react";
import Sidebar from "./index";
import "@testing-library/jest-dom";

describe("Sidebar", () => {
  it("should render Sidebar element", () => {
    render(<Sidebar />);
    const inputElement = screen.getByRole("Sidebar");
    expect(inputElement).toBeInTheDocument();
  });
});
