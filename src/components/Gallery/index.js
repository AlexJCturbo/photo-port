//we import useState as a named import from react destructuring from imports
import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description: "Photos of grocery stores, food trucks, and other commercial projects",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
        <img
          src={photo}
          alt='Commercial gallery items' className="img-thumbnail mx-1"
        />
      </div>
    </section>
  )
}

export default Gallery;

//In order to keep track of which page the user clicked on, we need to introduce some state to our component. We've been using variables to keep track of data with our JavaScript. This works fine for static code, but it has one problem: changing the value of a variable within a component does not cause the component to re-render. That is because React is using the virtual DOM, so changes to variables do not trigger re-renders to a component.

//IMPORTATN: One of the ways we can force a component to know about any changes is by using React Hooks.
//React Hooks allow you to easily manage the state within a component. Hooks are just JavaScript functions that follow two rules:
//1) Only call Hooks from React functions. 2) Only call Hooks at the top level (This means that you cannot use them inside for loops, nested functions within your React component, or conditionals)


//For organizational purposes and to ensure that you're following these rules, you may want to use Hooks towards the top of your React component.

/*IMPORTATN:
{useState} hook components follow a naming convention to set up the state of the function and how it is updated:
function Xyz() {
  const [state, setState] = useState(0)
}
"state" is a variable to store the state and "setState" is a function to set the state. Using array destructuring we set the array equal to useState(initialState). "initialState" can be any value that we have as the initial state of the function. The setState is an asynchronous function and therefore a variable must be created to track in real time whenever this function is updated.
Important to notice that useState(0) is the initial state.
*/