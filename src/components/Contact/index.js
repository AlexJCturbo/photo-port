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

      //isValid conditional statement
      // isValid conditional statement
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

    //Spread operator "..." in ...formState is used so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
    //Using the setFormState function to update the formState value for the name property. We assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name
    //we add a dynamic variable that's determined by the form element using [].
    //"name" property in the [e.target.name] referes to thename attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.

    //This conditional statement only allows the state to update with the user input if there is no error message, which is the correct logic.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    console.log('errorMessage', errorMessage);
  }

  //console.log(formState) is located outside the handleChange function declaration because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync.
  //console.log(formState);

  //This function prevents the default action of the form Submit button and then log the formState object on the Submit button click.
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //defaultValue is a React HTML atribute
  //onChange is an event listener. It will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name.
  return (
    <section>
      <h1 data-testid='h1-tag'>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          {/* we can use the onBlur attribute instead of onChange. The onBlur attribute will fire the event once the user has changed focus from the input field, thus allowing the user to finish their entry before validating their input. */}
          {/* <input type="text" name="name" defaultValue={name} onChange={handleChange} /> */}
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

        {/* if(errorMessage) {
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
          }
        These two conditional statements are the same. If errorMessage has a truthy value, the <div> block will render. If errorMessage doesn't have an error message, the following <div> block doesn't render.  */}

        <button data-testid='submitBtn' type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;