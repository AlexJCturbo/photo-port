import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import About from '../index';

//This function ensures that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

//Using the describe function to declare the component we're testing
describe('About component', () => {
  //Using "it" or "test" to create a test. The first argument of "it" declares what is being tested and the second a callback function runs the test. We are using the render function to render the "About" component using JSX.
  it('renders', () => {
    render(<About />);
  });

  //We are using the asFragment function, which returns a snapshot of the "About" component and then we test and compare whether the expected and actual outcomes match
  test('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })

})