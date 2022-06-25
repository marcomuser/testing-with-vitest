import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SummaryForm } from "./SummaryForm";

test("submit button is disabled by default", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: /confirm order/i });

  expect(button).toBeDisabled();
});

test("submit button is enabled after checkbox is clicked", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /i agree to the terms and conditions/i,
  });

  const button = screen.getByRole("button", {
    name: /confirm order/i,
  });

  await user.click(checkbox);

  expect(button).toBeEnabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  screen.queryByText(/no ice cream will actually be/i);
});
