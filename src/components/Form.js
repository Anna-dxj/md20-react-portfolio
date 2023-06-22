import React, {useState} from 'react';

import Warning from './Warning'
import {validateEmail} from '../utils/helpers'

function Form () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {name: inputType, value: inputValue} = e.target;

        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
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
        setMessage('');
    }

    return (
        <form className="custom-form-card px-3 py-2">
            <Warning />
            <div className="card-body">
                <div className="row pt-3 pb-1">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
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
                </div>
                <div className="pb-3 pt-1">
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
                <button type="button" className="custom-submit-btn my-3" onClick={handleFormSubmit}>Submit</button>
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