//import React from 'react';
//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About/index'
import Nav from './components/Nav/index'
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

//This App.js file is the center of the application.
//Think of App.js as the root component, or the wrapper component that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it.
//React components follow the PascalCase naming convention.

//JSX (JSX Stands for JavaScript XML) can represent HTML in JavaScript.

function App() {
  //Lift state to App.js and pass the currentCategory and its setter through to Nav. While we're at it, let's move categories up to the App level as well.
  const [categories] = useState([
    {
      name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  //set the initial value of contactSelected to false
  const [contactSelected, setContactSelected] = useState(false);

  //We pass the current category, which is the category selected by the user, from the Gallery.
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      {/* <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav> */}

      {/*We condition what renders based on which menu item the user selects from the navigation bar. To maintain this state, we added a useState Hook. 
      Ternary operator: identified with the ? and : symbols, the ternary operator is a pattern in React to enable conditional rendering. With the ternary we supply the false condition to render as well
      React fragments: <></> allow multiple elements to be grouped together. They allow to wrap elements without creating extra DOM nodes, like wrapping with a <div>*/}
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        {/* The preceding code is equivalent to the following conditional statement:
        if(!contactSelected) {
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </> 
        } else {
          <ContactForm></ContactForm>
        }
        */}

      </main>
    </div>
  );
}

export default App;
