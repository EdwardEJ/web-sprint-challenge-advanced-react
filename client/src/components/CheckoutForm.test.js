import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)
  const header = screen.getByText(/Checkout Form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />)
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const checkoutButton = screen.getByTestId(/checkout/i);

  expect(firstNameInput).toBeInTheDocument()
  expect(lastNameInput).toBeInTheDocument()
  expect(addressInput).toBeInTheDocument()
  expect(cityInput).toBeInTheDocument()
  expect(stateInput).toBeInTheDocument()
  expect(zipInput).toBeInTheDocument()
  expect(checkoutButton).toBeInTheDocument()

  fireEvent.change(firstNameInput, { target: { value: 'testing' } })
  fireEvent.change(lastNameInput, { target: { value: 'testing' } })
  fireEvent.change(addressInput, { target: { value: 'testing' } })
  fireEvent.change(cityInput, { target: { value: 'testing' } })
  fireEvent.change(stateInput, { target: { value: 'testing' } })
  fireEvent.change(checkoutButton, { target: { value: 'testing' } })
  fireEvent.click(checkoutButton)

  const successMessage = screen.getByText(/You have ordered some plants/i)
  expect(successMessage).toBeInTheDocument();
});
