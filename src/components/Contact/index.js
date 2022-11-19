import React, { useState } from "react";

//To validate the email format, we import the utility function validateEmail from the utils/helpers directory
import { capitalizeFirstLetter, validateEmail } from "../../utils/helpers";

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid)
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(capitalizeFirstLetter(`${e.target.name} is required.`));
      } else {
        setErrorMessage('');
      }
    }

    //This conditional statement only allows the state to update with the user input if there is no error message, which is the correct logic.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    //console.log('errorMessage', errorMessage);
  }

  //This function prevents the default action of the form Submit button and then log the formState object on the Submit button click.
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //onChange is an event listener. It will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name.
  return (
    <section>
      <h1 data-testid='h1-tag'>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid='submitBtn' type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;