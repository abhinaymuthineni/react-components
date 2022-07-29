import { render, screen } from "@testing-library/react";
import React from "react";
import Avatar from "./Ava";
import "@testing-library/jest-dom";
import img from "../../../assets/avatar.png";

describe("Avatar", () => {
  it("should render Avatar element", () => {
    render(<Avatar image={img} />);
    const inputElement = screen.getByRole("avatar");
    expect(inputElement).toBeInTheDocument();
  });
});
