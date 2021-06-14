import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

describe("Box tests", () => {
  it("should render", () => {
    expect(render(<Box />)).toBeTruthy();
  });
});
