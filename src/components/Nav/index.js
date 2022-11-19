import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  /*Using a Hook to trigger a re-render on a variable value change. First argument is the callback function, second argument is array to direct the hook to re-render the component on changes.*/
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  console.log(capitalizeFirstLetter(currentCategory.name));

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
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About me</a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}>
              <span onClick={() => {
                setContactSelected(false);
                setCurrentCategory(category);
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
