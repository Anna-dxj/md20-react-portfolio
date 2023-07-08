import React from 'react'

export default function ResumeCard({type, dates, school, location, description, ach, title, employer, org, skills}){
    const splitSkills = (skills) => {
        console.log(skills)
        // const skillList = skills.split("; ")
        // console.log(skillList)
    }
    splitSkills(skills)
    return (
        <div>
            {type === 'education' && (
                <div className="custom-card my-2 col-sm-12">
                    <h3 className="card-title custom-card-header">{ach}</h3>
                    <div className="py-2 px-3">
                        <div className="d-flex justify-content-between">
                            <p>
                                <span className="custom-text">{school}</span>, {location}
                            </p>
                            <p>{dates}</p>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            )}
            {type === 'experience' && (
                <div className="custom-card my-2 col-sm-12">
                    <h3 className="card-title custom-card-header">{title}</h3>
                    <div className="py-2 px-3">
                        <div className="d-flex justify-content-between">
                            <p> 
                                <span className="custom-text">{employer}</span>, {location}
                            </p>
                            <p>{dates}</p>
                        </div>
                        <p>{description}</p>
                        <ul className='list-group'>
                            {ach && ach.split(". ").map((key) => (
                                <li className='list-group-item'>{key}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {type === 'leadership' && (
                <div className="custom-card my-2 col-sm-12">
                    <h3 className="card-title custom-card-header">{title}</h3>
                    <div className="py-2 px-3">
                        <div className="d-flex justify-content-between">
                            <p><span className="custom-text">{org}</span>, {location}</p>
                            <p>{dates}</p>
                        </div>
                        <ul className='list-group'>
                            {ach && ach.split(". ").map((key) => (
                                <li className='list-group-item'>{key}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {type === 'skills' && (
                <div className="custom-card my-2 col-sm-12">
                    <h3 className="card-title custom-card-header">{title}</h3>
                    <div className="py-2 px-3">
                            {skills.split("; ").length > 10 ? (
                                <div className="row d-fle flex-row justify-content-center align-items-start">
                                    <ul className="list-group col-md-6 col-sm-12 px-2">
                                        {
                                            skills.split("; ").slice(0, 8).map((skill) => (
                                                <li className="list-group-item">{skill}</li>
                                            )
                                        )}
                                    </ul>
                                    <ul className="list-group col-md-6 col-sm-12 py-1 px-2">
                                        {
                                            skills.split("; ").slice(8, 15).map((skill) => (
                                                <li className="list-group-item">{skill}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ) : (
                                <ul className='list-group'>
                                    {skills.split("; ").map((skill) => (
                                        <li className="list-group-item">{skill}</li>
                                    ))}
                                </ul>
                            )}
                    </div>
                </div>
            )}
        </div>
    )
}