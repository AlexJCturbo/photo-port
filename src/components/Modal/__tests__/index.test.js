import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Modal from '..';
import PhotoList from '../../Gallery/PhotoList';

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: 'Cat green eyes',
  category: 'portraits',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup);

describe('Displaying modals', () => {
  it('renders modal', () => {
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto} />)
  })

  it('matches snapshot DOM node structure', () => {
    // Arrange the snapshot - declare variables
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />)

    // Assert the match
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Click event close modal', () => {
  //Arrange: Render Modal
  test('calls onClose handler', () => {
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />)

    //Act: Simulate click event
    fireEvent.click(getByText('Close'))
    //Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  })
});