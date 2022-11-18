import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '../index'

afterEach(cleanup)

const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

describe('Display contact section', () => {
  it('renders', () => {
    render(<ContactForm
      contactSelected={mockContactSelected}
      setContectSelected={mockSetContactSelected}
    />)
  });

  test('matches snapshot node structure', () => {
    const { asFragment } = render(
      <ContactForm
        contactSelected={mockContactSelected}
        setContectSelected={mockSetContactSelected}
      />);
    expect(asFragment()).toMatchSnapshot();
  });

});

describe('Contact form content', () => {
  it('matches Contact me', () => {
    const { getByTestId } = render(
      <ContactForm
        contactSelected={mockContactSelected}
        setContectSelected={mockSetContactSelected}
      />
    );
    expect(getByTestId('h1-tag')).toHaveTextContent('Contact me');
  });

  it('matches Submit button', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('submitBtn')).toHaveTextContent('Submit');
  });
});
