import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

afterEach(cleanup);

//The Nav component has been modified in this lesson to handle props. The test suite for the Nav must reflect that in order to render and function properly.
//In order to handle props for the Nav, we need to add the categories array as well as some mock functions. We can use these mock functions as props for the Nav component to render
const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe('Nav component', () => {

  //Baseline test

  // test('render', () => {
  //   render(<Nav />);
  // });
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
  })

  //Snapshot test
  test('matches snapshot', () => {
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
    expect(asFragment()).toMatchSnapshot();
  })

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
      //Arrange
      const { getByLabelText } = render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
      //Assert
      expect(getByLabelText('camera')).toHaveTextContent('📷');
    });
  })

  describe('links are visible', () => {
    it('inserts text into the links,', () => {
      const { getByTestId } = render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })
})