import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoItem } from "./index";

describe("TodoItem", () => {
  it("should call onRemove callback when the remove button is pressed", () => {
    const onRemove = jest.fn();
    const { getByText } = render(
      <TodoItem
        id={1}
        done={true}
        name={"temp"}
        onCheck={() => {}}
        onRemove={onRemove}
      />
    );
    const removeButton = getByText("R");
    fireEvent.click(removeButton);
    expect(onRemove).toHaveBeenCalledTimes(1);
  });
  it("should call onCheck callback when checkbox is pressed", () => {
    const onCheck = jest.fn();
    const { getByRole } = render(
      <TodoItem
        id={1}
        done={true}
        name={"temp"}
        onRemove={() => {}}
        onCheck={onCheck}
      />
    );
    const checkBox = getByRole("checkbox");
    fireEvent.click(checkBox);
    expect(onCheck).toHaveBeenCalledTimes(1);
  });
});
