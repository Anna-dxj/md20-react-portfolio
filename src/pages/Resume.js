import React, { useEffect } from 'react';
import '../styles/Resume.css'
import {Download} from 'react-bootstrap-icons'
import ResumeCard from '../components/ResumeCard'

export default function Home() {
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
          <h2 className="card-title">Technical Skills</h2>
          <div className="card-body d-flex flex-column justify-content-around">
            <ResumeCard
              type="skills"
              title="Software/Platforms"
              skills="GitHub Workflow; jQuery; CSS & UI Libraries; Node.js & Express.js; MySQL & Sequelize; MongoDB & Mongoose; RESTful API & GraphQL; React; Object-Oriented Programming; Functional Programming; Test-driven Development; Progressive Web Applications; MERN Stack; Responsive Design; Separation of Concerns (MVC, Client-Server)"
            />
            <ResumeCard
              type="skills"
              title="Software Languages"
              skills="HTML; CSS; JavaScript; SQL; GraphQL"
            />
          </div>
        </div>
        <div className="custom-card-background container py-2 my-2 px-3 shadow-lg col-sm-12 col-md-5">
          <h2 className="card-title">Experience</h2>
          <div className="card-body d-flex flex-column justify-content-around">
          <ResumeCard 
              type="experience"
              title="Private Math Tutor"
              employer="Self-Employed"
              location="Scottsdale, Arizona"
              dates="2022 - ongoing"
              description="Provided personalized assitance to students struggling in Math, aiding in developing study skills, test-taking skills, and general problem-solving skills."
              ach="Communicated with parents on students' progress, difficulty areas, and plans to improve grade. Adapted tutoring session to accomodate different learning styles, strengths, and weaknesses"
            />
            <ResumeCard 
              type="experience"
              title="Teaching Assistant"
              employer="Rice University Linguistics Department"
              location="Houston, Texas"
              dates="2020, 2021" 
              description="Fulfilled Teaching Assistant responsibilities for Language and Society wile managing a full course load."
              ach="Composed the midterm and guidelines for final papers and other assignments with the professor for Language and Society. Graded assignments and coursework and provided feedback for Language and Society"
            />
          </div>
        </div>
        <div className="custom-card-background container py-2 my-2 px-3 shadow-lg col-sm-12 col-md-5">
          <h2 className="card-title">Leadership and Involvement</h2>
          <div className="card-body d-flex flex-column justify-content-around">
            <ResumeCard 
              type="leadership"
              title="Founder and President of Rice Chinsese Dance Club"
              org="Rice University"
              location="Houston, Texas"
              dates="2021 - 2022"
              ach="Communicated with other campus clubs for events and establish ongoing relationships for future events. Founded and managed club, overseeing all aspects of operations, including organizing and teaching practices, recruiting members, and collaborating with board members to ensure smooth operations"
            />
            <ResumeCard 
              type="leadership"
              title="Director for BASYK Dance Club"
              org="Rice University"
              location="Houston, Texas"
              dates="2018 - 2022"
              ach="Managed my own dancers and acted as a liason between dancers and the board to communicate instructions, concerns, and scheduling for practices and filming. Participated in other directors' projects, acted as a mentor to and advised new directors"
            />
          </div>
        </div>
        <div className="custom-card-background container py-2 my-2 px-3 shadow-lg col-sm-12 col-md-5">
          <h2 className="card-title">Education</h2>
          <div className="card-body d-flex flex-column flex-fill justify-content-around">
            <ResumeCard 
              type = "education"
              ach="Full Stack Web Development Certificate"
              dates="2022 - 2023"
              school="UCLA"
              location="Los Angeles, California"
              description="A 24-week intensive program focused on gaining skills in modern, JavaScript-based web technologies and development."
            />
            <ResumeCard 
              type = "education"
              ach="Bachelor of Arts in Linguistics"
              dates="2018 - 2022"
              school="Rice University"
              location="Houston, Texas"
              description="GPA: 3.61/4.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
