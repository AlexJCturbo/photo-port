import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

afterEach(cleanup);

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

describe('Nav component', () => {

  //Baseline test
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      setContactSelected={mockSetContactSelected}
      contactSelected={mockContactSelected}
    />);
  })

  //Snapshot test
  test('matches snapshot', () => {
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      setContactSelected={mockSetContactSelected}
      contactSelected={mockContactSelected}
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
        setContactSelected={mockSetContactSelected}
        contactSelected={mockContactSelected}
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
        setContactSelected={mockSetContactSelected}
        contactSelected={mockContactSelected}
      />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })
})