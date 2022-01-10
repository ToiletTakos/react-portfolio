import React, { useState } from 'react';
import { validateEmail} from '../../utils/helpers';
// import 'bootstrap/dist/css/bootstrap.min.css';

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

        if(e.target.name === 'message') {
                if(!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`)
                }
                else {
                    setErrorMessage('');
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
            <div className='example size text-start'>
                <form id="contact-form"  onSubmit={handleSubmit}>
                    {/* name input */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    {/* email input */}
                    <div className="mb-3">
                        <label htmlFor='email' className='form-label'>Email address:</label>
                        <input type="email" className='form-control' defaultValue={email} onBlur={handleChange} name="email" />
                    </div>
                    {/* message text area */}
                    <div className='mb-3'>
                        <label htmlFor="message" className='form-label'>Message:</label>
                        <textarea name="message" className='form-control' defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
                    {/* error message to user if error */}
                    {errorMessage && (
                        <div>
                            <p >{errorMessage}</p>
                        </div>
                    )}
                    {/* button element */}
                    <button utype="submit" className='btn btn-secondary'>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;