import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import About from '../index';

afterEach(cleanup);

//Using the describe function to declare the component we're testing
describe('About component', () => {
  it('renders', () => {
    render(<About />);
  });

  //Using the asFragment function, which returns a snapshot of the "About" component and then we test and compare whether the expected and actual outcomes match
  test('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })

})