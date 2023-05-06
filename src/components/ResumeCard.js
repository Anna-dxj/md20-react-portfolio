import React from 'react'

export default function ResumeCard({title, location, time, ach, gpa, technologies, description}){
    return (
        <div className="card my-2 shadow col-sm-12">
            <h3 className="card-title card-header">{title}</h3>
            <div className="card-body">
              {(ach) ? (
                  <p className="card-text">{ach}</p>
              ) : ('')}
              <p className="card-text">{location}, {time}</p>
              {(gpa) ? (
                <p className="card-text">GPA: {gpa}/4.00</p>
              ) : ('')}
              {(technologies) ? (
                <div>
                    <p clasName="card-text">{technologies.split('; ').slice(-1).toString()}</p>
                    <div className="row d-flex flex-row justify-content-center align-items-start">
                        <ul className="list-group col-sm-6 col-md-12 px-2">
                            {technologies.split('; ').slice(0, 4).map((item) => {
                                return <li className="list-group-item">{item}</li>
                            })}
                        </ul>
                        <ul className="list-group col-sm-6 col-md-12 py-1 px-2">
                            {technologies.split('; ').slice(5, 10).map((item) => {
                                return <li className="list-group-item">{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
              ) : ('')}
              {(description) ? (
                <ul className="list-group">
                    {description.split('. ').map((item) => {
                        return <li className="list-group-item">{item}</li>
                    })}
                </ul>
              ) : ('')}
            </div>
          </div>
    )
}