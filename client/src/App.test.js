import { render, screen } from "@testing-library/react";
import App from "./App";

describe("It should render the basic layout", () => {
  test("renders learn react element", () => {
    render(<App />);
    const headerElement = screen.getByRole("heading", { name: "Hello World" });
    expect(headerElement).toBeInTheDocument();
  });
});
