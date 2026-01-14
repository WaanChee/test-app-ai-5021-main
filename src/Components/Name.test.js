import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Name from "./Name";

test("renders welcome message with Guest default", () => {
  render(<Name />);
  expect(screen.getByText("Welcome, Guest!")).toBeInTheDocument();
});

test("renders input field with correct attributes", () => {
  render(<Name />);
  const input = screen.getByRole("textbox", { name: /enter your name/i });
  expect(input).toHaveAttribute("placeholder", "Type your name...");
  expect(input).toHaveValue("");
});

test("updates welcome message when user types name", async () => {
  const user = userEvent.setup();
  render(<Name />);
  const input = screen.getByRole("textbox", { name: /enter your name/i });

  await user.type(input, "John");
  expect(screen.getByText("Welcome, John!")).toBeInTheDocument();
});

test("renders form label", () => {
  render(<Name />);
  expect(screen.getByLabelText(/enter your name/i)).toBeInTheDocument();
});
