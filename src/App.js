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

  //We pass the current category, which is the category selected by the user, from the Gallery.
  return (
    <div>
      <Nav categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
