import React from "react";
import { render } from "@testing-library/react";
import AddTask from "./AddTask";

describe("AddTask tests", () => {
  it("should render", () => {
    expect(render(<AddTask />)).toBeTruthy();
  });
});
