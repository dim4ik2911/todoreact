import React from "react";
import { render } from "@testing-library/react";
import Done from "./Done";

describe("Done tests", () => {
  it("should render", () => {
    expect(render(<Done />)).toBeTruthy();
  });
});
