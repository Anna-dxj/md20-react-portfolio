import React from 'react';
import photoMe from '../assets/images/photo-me.jpeg'

export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="container">
        <div className="row d-flex flex-row justify-content-center align-items-start">
          <div className="card p-1 m-1 col-sm-12 col-md-5">
            <div className="card-body">
              <img 
                src={photoMe} 
                alt="Photo of me" 
                className="card-img"
              />
            </div>
          </div>

          <div className="card m-1 py-2 px-3 col-sm-12 col-md-5">
              <p className="card-text">
                Hello, I'm Anna Langford, and I'm a junior full-stack software engineer, specializing in JavaScript.
                Before pursuing a carreer in tech, I graduated with a degree in Linguistics from Rice University in Houston, Texas.
                I have experience in academic tutoring and consulting, which has sharpemed my communication and problem-solving skills.
                Soon, I will be a recent graduate of the UCLA full-stack coding bootcamp, where I have learned many modern technologies such as the MERN stack. 
                During the coding bootcamp, I had the opportunity to work on small teams to create full-stack applications, including a full-stack social media based application aimed at developers, which features an AI chat bot, similar to ChatGPT.
                Working in these team environments has allowed me to sharpen my teamwork skills and learn how to communicate more effectively with others to deliver and take pride in high-quality products as a group wihtin short periods of time.
                My Linguistics background has equiped me with meticulous critical and analytical thinking skills that I apply to my work as a software engineer.
                In my spare time, I enjoy an active lifestyle with my two dogs and recreational dance studio. 
                I am passionate about using technology to make a positive impact in my community, and I am always looking for ways to grow and improve as a software engineer. 
                If you are interested in learning more about my experience, please consult the resume tab. Or if you would like to discuss anything with me, please do not hesitate to reach out. 
              </p>

          </div>
        </div>
      </div>
    </div>
  );
}
