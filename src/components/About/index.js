import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg'

//Creating the component About as a function to be exported into App.js
//The function can be created using a function expression or a function declaration
//cosnt About = function(){}
//function About () {}

//React components must always return a single parent JSX element
const About = () => {
  return (
    <section className='my-5'>
      <h1 id='about'>Who am I?</h1>
      <img src={coverImage} className='my-2' style={{ width: '100%' }} alt='cover image' />
    </section>
  )
}

export default About;
