import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoItemsList } from "./TodoItemsList";

describe("It should render correctly", () => {
  const data = [{ id: 1, title: "TODO item 1", checked: false }];

  test("It should not render a list if data is empty", () => {
    render(<TodoItemsList data={[]} />);
    const textElement = screen.getByText(/there are no tasks/i);
    expect(textElement).toBeInTheDocument();
  });

  test("It should have an unordered list if data is passed", () => {
    render(<TodoItemsList data={data} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("It should have at least a list item if populated data is passed", () => {
    render(<TodoItemsList data={data} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });
});
