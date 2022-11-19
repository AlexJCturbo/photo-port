import React, { useState } from 'react'
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem nulla vehicula nisi, a sollicitudin sem diam vitae risus',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Nunc a pellentesque sem, ac tincidunt enim. Donec varius, enim eu egestas sagittis',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'Aliquam semper tortor nec odio molestie, eget volutpat dolor tincidunt',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'Lorem nulla vehicula nisi, a sollicitudin sem diam vitae risus',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'Nunc a pellentesque sem, ac tincidunt enim. Donec varius, enim eu egestas sagittis',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'Aliquam semper tortor nec odio molestie, eget volutpat dolor tincidunt',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem nulla vehicula nisi, a sollicitudin sem diam vitae risus',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'Nunc a pellentesque sem, ac tincidunt enim. Donec varius, enim eu egestas sagittis',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'Aliquam semper tortor nec odio molestie, eget volutpat dolor tincidunt',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'Nunc a pellentesque sem, ac tincidunt enim. Donec varius, enim eu egestas sagittis',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'Lorem nulla vehicula nisi, a sollicitudin sem diam vitae risus',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Aliquam semper tortor nec odio molestie, eget volutpat dolor tincidunt',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Nunc a pellentesque sem, ac tincidunt enim. Donec varius, enim eu egestas sagittis',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'commercial',
      description: 'Lorem nulla vehicula nisi, a sollicitudin sem diam vitae risus',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Aliquam semper tortor nec odio molestie, eget volutpat dolor tincidunt',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  //use the useState Hook in the PhotoList component to manage the current photo state and make this data accessible to the Modal component
  const [currentPhoto, setCurrentPhoto] = useState();

  //Set initial state of isModalOpen to false.
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
      <div className='flex-row'>
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  )
}

export default PhotoList;