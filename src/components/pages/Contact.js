import React, { useState } from 'react';
import { validateEmail} from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    // function to handle changes to each of the form entries(name, email, message)
    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid.')
            }
            else {
                if(!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`)
                }
                else {
                    setErrorMessage('');
                }
            }
        }
        
        if (!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value })
        }
        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section id="contact" className="info flex-row">
            <h3>Contact <br /> Me</h3>
            <form id="contact-form" className='example size' onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {/* error message to user if error */}
                {errorMessage && (
                    <div>
                        <p >{errorMessage}</p>
                    </div>
                )}
                {/* button element */}
                <button utype="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;