import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoListItem } from "./TodoListItem";

describe("It should display the information passed to it", () => {
  beforeEach(() => {
    const todoItem = {
      id: 1,
      check: false,
      title: "TODO Item 1",
    };

    render(<TodoListItem todoItem={todoItem} />);
  });

  test("It should have a li with the list-item class", () => {
    const liElement = screen.getByTestId("list-item-li");
    expect(liElement).toHaveClass("list-item");
  });

  test("It should contain an unchecked checkbox", () => {
    const checkboxElement = screen.getByRole("checkbox");
    const isChecked = checkboxElement.checked;
    expect(isChecked).toBeFalsy();
  });

  test("It should contain a label for the checkbox", () => {
    const labelElement = screen.getByLabelText("TODO Item 1");
    expect(labelElement).toBeInTheDocument();
  });

  test("It should contain two anchor elements", () => {
    const anchorElements = screen.getAllByRole("link");
    const editAnchor = anchorElements[0];
    const deleteAnchor = anchorElements[1];
    expect(editAnchor.textContent).toMatch(/edit/i);
    expect(deleteAnchor.textContent).toMatch(/delete/i);
  });

  test("User should be able to check the item", () => {
    const checkboxElement = screen.getByRole("checkbox");
    userEvent.click(checkboxElement);
    const isChecked = checkboxElement.checked;
    expect(isChecked).toBeTruthy();
  });
});
