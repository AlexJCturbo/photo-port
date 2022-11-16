import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  //We cleaned up Nav/index.js by "lifting" the state to the parent component, App.js.
  const { categories = [], setCurrentCategory, currentCategory } = props;

  /*We must use a Hook to trigger a re-render on a variable value change. To update the document.title, we will introduce a new Hook called useEffect. The main difference between useEffect and useState is that useEffect is an API that reflects the lifecycle methods of the component, such as when the component mounts, unmounts, or updates.
  The first argument is the callback function, and the second argument is an array with a single element, currentCategory. The second argument directs the hook to re-render the component on changes to the value of this state.*/
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  console.log(capitalizeFirstLetter(currentCategory.name));

  // const [categories] = useState([
  //   {
  //     name: 'Commercial',
  //     description: 'Photos of grocery stores, food trucks, and other commercial projects',
  //   },
  //   {
  //     name: 'Portraits',
  //     description: 'Portraits of people in my life',
  //   },
  //   {
  //     name: 'food',
  //     description: 'Delicious delicacies',
  //   },
  //   {
  //     name: 'Landscape',
  //     description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
  //   },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <header className='flex-row px-1'>
      <h2>
        <a data-testid='link' href='/'>
          <span role='img' aria-label='camera' >
            {" "}
            📷
          </span>{""}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a data-testid='about' href='#about'>About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'
              }`} key={category.name}>
              <span onClick={() => {
                setCurrentCategory(category)
              }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}

export default Nav;

/*Gallery is not a child of Nav, so we can't pass props from Nav to the Gallery. We could create a state in Gallery, but then it wouldn’t know about the navigation changing. Instead, we’re going to “lift” the state up one level.
Whenever you think state needs to be used in multiple sibling components, it's normally a good idea to lift the state up until it can be passed as props to any child components that need it.
Lift state to App.js and pass the currentCategory and its setter through to Nav. While we're at it, let's move categories up to the App level as well.*/