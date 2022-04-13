import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ListItemInput } from "./ListItemInput";

describe("It should render correctly", () => {
  test("It should have an input text with 'New Task' placeholder", () => {
    render(<ListItemInput />);
    const inputTextElement = screen.getByRole("textbox");
    expect(inputTextElement.placeholder).toMatch(/new task/i);
  });

  test("It should render a submit button", () => {
    render(<ListItemInput />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
