import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg'

//Creating the component About as a function to be exported into App.js
const About = () => {
  return (
    <section className='my-5'>
      <h1 id='about'>Who am I?</h1>
      <img src={coverImage} className='my-2' style={{ width: '100%' }} alt='cover' />
      <p>
        Lyza grew up close to the Canadian Rockies enjoying amazing views. She enjoys capturing the moment wherever she goes. Her camera is the first thing she packs before going on a trip.
        <br />
        Lyza is currently based in Toronto.  She is also available for travel assignments departing Montreal.
      </p>
    </section>
  )
}

export default About;
