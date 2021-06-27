import React from "react";
import { render } from "@testing-library/react";
import TasksList from "./TasksList";

describe("TasksList tests", () => {
  it("should render", () => {
    expect(render(<TasksList />)).toBeTruthy();
  });
});
