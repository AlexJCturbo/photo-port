import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

afterEach(cleanup);

describe('Nav component', () => {

  //Baseline test
  test('render', () => {
    render(<Nav />);
  });

  //Snapshot test
  test('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  })

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
      //Arrange
      const { getByLabelText } = render(<Nav />);
      //Assert
      expect(getByLabelText('camera')).toHaveTextContent('📷');
    });
  })

  describe('links are visible', () => {
    it('inserts text into the links,', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })
})