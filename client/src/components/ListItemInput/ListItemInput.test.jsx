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

describe("It should be able to submit the form", () => {
  let submitButton, inputTextElement;

  beforeEach(() => {
    render(<ListItemInput />);
    submitButton = screen.getByRole("button");
    inputTextElement = screen.getByRole("textbox");
  });

  test("It should update the input value when the user types", () => {
    userEvent.type(inputTextElement, "Write a new task");
    expect(inputTextElement.value).toMatch(/write a new task/i);
  });

  test("It shouldn't be able to add an empty task", () => {
    userEvent.type(inputTextElement, "   ");
    expect(submitButton.disabled).toBeTruthy();
  });

  test("It should be able to add a new task", () => {
    userEvent.type(inputTextElement, "Write a new task");
    expect(submitButton.disabled).toBeFalsy();
  });
});
