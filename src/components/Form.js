import React, {useState} from 'react';

import {validateEmail} from '../utils/helpers'

function Form () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {name: inputType, value: inputValue} = e.target;

        if (type === 'name') {
            setName(value)
        } else if (type === 'email') {
            setEmail(value)
        } else {
            setMessage(value)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Must use a proper email')
        }
        if (!name || !message) {
            setErrorMessage('Must include both your name and your message')
        }

        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <form className="card">
            <div className="card-body">
                <div>
                    <label className="form-label" for="name">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder="Name" 
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="form-label" for="email">Email</label>
                    <input 
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="form-label" for="message">Message</label>
                    <textarea 
                        className="form-control"
                        name="message"
                        placeholder="Your message here"
                        value={message}
                        onChange={handleInputChange}
                    >
                    </textarea>
                </div>
                <button type="button" className="btn" onClick={handleFormSubmit}>Submit</button>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </form>
    )
}

export default Form;