import React, { useEffect } from 'react';
import '../styles/About.css'
import photoMe from '../assets/images/photo-me.jpeg'

export default function About() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash ==='#About') {
        window.scrollTo(0,0)
      }
    }

    window.addEventListener('hashChange', handleHashChange)

    return () => {
      window.removeEventListener('hashChange', handleHashChange)
    }
  }, [])

  return (
    <div className="container my-3 custom-background">
      <h1 className="custom-txt">About Me</h1>
      <div className="container">
        <div className="row d-flex flex-row justify-content-center">
          <div className="custom-card p-1 m-1 col-sm-12 col-md-5 d-flex flex-row justify-content-center align-items-center">
            <div className="img-container">
              <img 
                src={photoMe} 
                alt="Photo of me" 
                className="custom-card-img"
              />
            </div>
          </div>

          <div className="m-1 p-3 col-sm-12 col-md-5 shadow custom-card-background">
            <div className="p-3 custom-card">
              <p className="card-text">
                Hello, I'm Anna Langford, and I'm a junior full-stack software engineer, specializing in JavaScript.
                Before pursuing a career in tech, I graduated with a degree in Linguistics from Rice University in Houston, Texas.
                I have experience in academic tutoring and consulting, which has sharpened my communication and problem-solving skills.
                Soon, I will be a recent graduate of the UCLA full-stack coding boot camp, where I have learned many modern technologies such as the MERN-G stack.
                During the coding boot camp, I had the opportunity to work on small teams to create full-stack applications, including a full-stack social media-based application aimed at developers, which features an AI chatbot, similar to ChatGPT.
                Working in these team environments has allowed me to sharpen my teamwork skills and learn how to communicate more effectively with others to deliver and take pride in high-quality products as a group within short periods of time.
                My Linguistics background has equipped me with meticulous critical and analytical thinking skills that I apply to my work as a software engineer.
                In my spare time, I enjoy an active lifestyle with my two dogs or at my recreational dance studio.
                I am passionate about using technology to make a positive impact in my community, and I am always looking for ways to grow and improve as a software engineer.
                If you are interested in learning more about my experience, please consult the resume tab. Or if you would like to discuss anything with me, please do not hesitate to reach out.

              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
