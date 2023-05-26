import React from 'react';
import '../styles/Resume.css'
import {Download} from 'react-bootstrap-icons'
import ResumeCard from '../components/ResumeCard'

export default function Home() {
  return (
    <div className="container my-3 ">
      <h1 className="custom-txts">Resume 
        <a 
          href={`${process.env.PUBLIC_URL}/resume-langford.pdf`} 
          className="custom-download"
          download
        >
          <Download />
        </a> 
      </h1>
      <div className="row d-flex flex-row justify-content-center">
        <div className="custom-card-background container py-2 my-2 px-3 shadow-lg col-sm-12 col-md-5">
          <h2 className="card-title">Education</h2>
          <div className="card-body align-items-center d-flex flex-column justify-content-around">
            <ResumeCard 
              title="Rice University"
              location="Houston, Texas"
              time="Auguest 2018 - May 2022"
              ach="Bachelor of Arts in Linguistics"
              gpa="3.61"
            />
            <ResumeCard 
              title="UCLA Extension Full-Stack Coding Bootcamp"
              location="Virtual"
              time="November 2022 - May 2023"
              ach="Certificate"
              technologies="HTML; CSS and responsive design; CSS Libraries (Bootstrap, Materialize.css); JavaScript and jQuery; React; RESTful APIs and GraphQL; Node; Express; MySQL and Sequelize; MongoDB and Mongoose; Studied and learned modern front-end and backend proficiencies:"

            />
          </div>
        </div>
        <div className="custom-card-background container py-2 my-2 px-3 shadow-lg col-sm-12 col-md-5">
          <h2 className="card-title">Leadership and Involvement</h2>
          <div className="card-body align-items-center d-flex flex-column justify-content-around">
            <ResumeCard 
              title="Founder and President of Rice Chinsese Dance Club"
              location="Houston, Texas"
              time="Fall 2021 - May 2022"
              description="Coordinated with other campus clubs for performances and establish ongoing relationships for future events and performances. Founded and managed club, overseeing all aspects of operations, including organizing and teaching practices, recruiting members, and collaborating with the treasurer to secure funding"
            />
            <ResumeCard 
              title="Director for BASYK Dance Club"
              location="Houston, Texas"
              time="Fall 2018 - May 2022"
              description="Managed my own dancers and acted as middleman when communicating with the board to schedule practices and filming and to relay instructions or concerns. Participated in other directors' projects, and advised newer directors if requested"
            />
          </div>
        </div>
        <div className="custom-card-background container py-2 my-2 px-3 shadow-lg col-sm-12 col-md-5">
          <h2 className="card-title">Experience</h2>
          <div className="card-body align-items-center d-flex flex-column justify-content-around">
            <ResumeCard 
              title="Rice University Linguistics Department"
              location="Houston, Texas"
              time="Fall 2020, Fall 2021" 
              ach="Teaching Assistant"
              description="Composed the miterm and guidelines for final papers and other assignments with the professor for Language and Society. Graded assignments and coursework and provided feedback for Language and Society"
            />
            <ResumeCard 
              title="Self-Employed"
              location="Scottsdale, Arizona"
              time="Fall 2022 - ongoing"
              ach="Private Math Tutor"
              description="Provided personalized assistance to students strugggling in Math, helping them develop study skills and re-explaining material as needed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
