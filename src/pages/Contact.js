import React from 'react';
import '../styles/Contact.css'
import Form from '../components/Form'

export default function Contact() {
  return (
    <div className="container my-3">
      <h1 className="custom-txts">Contact</h1>
      <div className="custom-card-background py-3 px-4">
        <Form />
      </div>
    </div>
  );
}
