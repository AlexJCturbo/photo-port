//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import About from './components/About/index'
import Nav from './components/Nav/index'

//This App.js file is the center of the application.
//Think of App.js as the root component, or the wrapper component that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it.
//React components follow the PascalCase naming convention.

//JSX (JSX Stands for JavaScript XML) can represent HTML in JavaScript.
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
