import React from "react";
import { render } from "@testing-library/react";
import Add from "./Add";

describe("Add tests", () => {
  it("should render", () => {
    expect(render(<Add />)).toBeTruthy();
  });
});
