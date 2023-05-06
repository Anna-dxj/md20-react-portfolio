import React from 'react';
import {Download} from 'react-bootstrap-icons'

export default function Home() {
  return (
    <div>
      <h1>Resume 
        <a 
          href={`${process.env.PUBLIC_URL}/resume-langford.pdf`} 
          className="btn"
          download
        >
          <Download />
        </a> 
      </h1>
      <div className="card">
        <h2 className="card-title">Education</h2>
        <div className="card-body">
          <div className="card">
            <h3 className="card-title card-header">
              <span>Rice Universty</span>
              , Houston, Texas
            </h3>
            <div className="card-body">
              <p className="card-text">Bachelor of Arts in Linguistics, graduation in May 2022</p>
              <p className="card-text">GPA: 3.61/4.00</p>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title card-header">
              <span>UCLA Extension Full-Stack Coding Bootcamp</span>
              , Virtual
            </h3>
            <div className="card body">
              <p className="card-text">Certificate, expected completion in May 2023</p>
              <p className="card-text">Studied and learned modern front-end and backend proficiencies:</p>
              <ul className="list-group">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS and responsive design</li>
                <li className="list-group-item">CSS Libraries (Bootstrap, Materialize.css)</li>
                <li className="list-group-item">JavaScript and jQuery</li>
                <li className="list-group-item">React</li>
              </ul>
              <ul className="list-group">
                <li className="list-group-item">RESTful APIs and GraphQL</li>
                <li className="list-group-item">Node</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">MySQL & Sequelize</li>
                <li className="list-group-item">MongoDB & Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <h2 className="card-title">Leadership and Involvement</h2>
        <div className="card-body">
          <div className="card">
            <h3 className="card-title card-header">
              <span>Founder and President of Rice Chinsese Dance Club</span>
              , Houston, Texas
            </h3>
            <div className="card-body">
              <p className="card-text">Fall 2021 - May 2022</p>
              <ul className="list-group">
                <li className="list-group-item">Coordinated with other campus clubs for performances and establish ongoing relationships for future events and performances</li>
                <li className="list-group-item">Founded and managed club, overseeing all aspects of operations, including organizing and teaching practices, recruiting members, and collaborating with the treasurer to secure funding</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title card-header">
              <span>Director for BASYK Dance Club</span>
              , Houston, Texas
            </h3>
            <div className="card-body">
              <p className="card-text">Fall 2018 - May 2022</p>
              <ul className="list-group">
                <li className="list-group-item">Managed my own dancers and acted as middleman when communicating with the board to schedule practices and filming and to relay instructions or concerns</li>
                <li className="list-group-item">Participated in other directors' projects, and advised newer directors if requested</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <h2 className="card-title">Experience</h2>
        <div className="card-body">
        <div className="card">
            <h3 className="card-title card-header">
              <span>Rice University Linguistics Department</span>
              , Houston, Texas
            </h3>
            <div className="card-body">
              <p className="card-text">Teaching Assistant, Fall 2020, Fall 2021</p>
              <ul className="list-group">
                <li className="list-group-item">Composed the miterm and guidelines for final papers and other assignments with the professor for Language and Society</li>
                <li className="list-group-item">Graded assignments and coursework and provided feedback for Language and Society</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title card-header">
              <span>Self-Employed</span>
              , Scottsdale, Arizona
            </h3>
            <div className="card-body">
              <p className="card-text">Private Math Tutor, Fall 2022-Ongoing</p>
              <ul className="list-group">
                <li className="list-group-item">Provided personalized assistance to students strugggling in Math, helping them develop study skills and re-explaining material as needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
