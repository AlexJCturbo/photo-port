import React, { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;

  function handleChange(e) {
    //Spread operator "..." in ...formState is used so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
    //Using the setFormState function to update the formState value for the name property. We assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name
    //we add a dynamic variable that's determined by the form element using [].
    //"name" property in the [e.target.name] referes to thename attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  //console.log(formState) is located outside the handleChange function declaration because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync.
  console.log(formState);

  //This function prevents the default action of the form Submit button and then log the formState object on the Submit button click.
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //defaultValue is a React HTML atribute
  //onChange is an event listener. It will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name.
  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;