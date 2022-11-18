import React, { useState } from 'react'
import Modal from '../Modal';

//import photo from '../../assets/small/commercial/0.jpg';

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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  //We're going through each photo in the photos array, trying to find every photo that matches the category that was selected by the user. If a photo matches the condition, it is returned in an array and assigned to currentPhotos. Then we can map the currentPhotos array to render each photo that matches the category selected by the user.
  //The last step we need to take is to pass the current category, which is the category selected by the user, from the Gallery component in App.js
  const currentPhotos = photos.filter((photo) => photo.category === category);

  //use the useState Hook in the PhotoList component to manage the current photo state and make this data accessible to the Modal component through props
  const [currentPhoto, setCurrentPhoto] = useState();

  //Set initial state of isModalOpen to false, because we don't want the modal to open until a user has clicked on an image.
  const [isModalOpen, setIsModalOpen] = useState(false);

  //We update the current photo state using the setCurrentPhoto function with the data retrieved through the click event. We use the spread operator here to add the index: i key value pair to the current photo state. Because currentPhoto now contains the two critical data points needed for the modal, we can pass in currentPhoto as a prop to the Modal
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });

    //Update the isModalOpen state to true
    //Let's change how isModalOpen is updated so that when the toggleModal function is executed, the value of isModalOpen is toggled from true to false. The following modification will accomplish that:
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {/* Because currentPhoto now contains the two critical data points needed for the modal, we can pass in currentPhoto as a prop to the Modal */}
      {/* use the short-circuit AND operator, &&, to only render the modal if the isModalOpen value is true */}

      {/* {isModalOpen && <Modal currentPhoto={currentPhoto} />} */}

      {/*We modify previous line and now we pass {toggleModal} function down as a prop drilling to Modal allowing us to toggle the state of the modal */}
      {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
      {/*The onClose identifier was assigned the function toggleModal. Let's manage the new prop, onClose, being passed down to the Modal component. In the Modal function, let's add onClose as a parameter of the Modal function */}

      <div className='flex-row'>
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            //Note that we added the event listener attribute to each <img> element in each category and assigned the toggleModal function to handle the click event. We passed in the current image and i as arguments. The image object represents the element in the photos array, and the i will render the image.
            onClick={() => toggleModal(image, i)}

            //React will give us an error message stating that the application has failed to compile due to the function is undefined, meaning that we've tried to invoke the toggleModal function before declaring it.
            key={image.name}
          />
        ))}
      </div>
    </div>
  )
}

//The key attribute was assigned the image's name. This attribute value must be a unique string. The absence of this unique key value will cause an error message.
//src was assigned the require expression. Though this isn't a common practice, it certainly has its use cases! We were also able to take advantage of the incremental naming of the images by using i.

export default PhotoList;