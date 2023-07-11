import React, { useEffect } from 'react';
import '../styles/Contact.css'
import Form from '../components/Form'

export default function Contact() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash ==='#Contact') {
        window.scrollTo(0,0)
      }
    }

    window.addEventListener('hashChange', handleHashChange)

    return () => {
      window.removeEventListener('hashChange', handleHashChange)
    }
  }, [])

  return (
    <div className="container my-3 main-body">
      <h1 className="custom-txts">Contact</h1>
      <div className="custom-card-background py-3 px-4">
        <Form />
      </div>
    </div>
  );
}
