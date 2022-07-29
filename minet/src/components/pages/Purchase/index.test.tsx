import { render, screen } from "@testing-library/react";
import React from "react";
import Purchase from "./index";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("Purchase", () => {
  it("should render Purchase element", () => {
    render(
      <Router>
        <Purchase />
      </Router>
    );
    const inputElement = screen.getByRole("Purchase");
    expect(inputElement).toBeInTheDocument();
  });
});
