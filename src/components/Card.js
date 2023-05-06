import React from 'react';
import {Github, BoxArrowUpRight} from 'react-bootstrap-icons'

export default function ProjectCard({deployedLink, imgSrc, imgAlt, name, repoLink, description, technologies}){
    return (
        <div className="card row d-flex flex-row justify-content-center align-items-start m-2 p-1">
          <img 
            src={imgSrc} 
            alt={`Screenshot of ${imgAlt}`}
            className="card-img-top col-md-6 pt-4"
          />
            <div className="card-body col-md-6">
              <div className="d-flex flex-row justify-content-between">
                <h3 clsasName="card-title col-md-8">{name}</h3>
                <div className="d-flex flex-row justify-content-evenly col-md-4">
                  <a href={deployedLink}>
                    <BoxArrowUpRight width="20" height="20" />
                  </a>
                  <a href={repoLink}>
                    <Github width="25" height="25"/>
                  </a>
                </div>
              </div>
              <p className="card-text">{description}</p>
              {technologies ? (
                <p className="card-text">
                  {technologies.split(' ')
                    .map((tech) => {
                      return (<span className="badge bg-secondary me-1">{tech}</span>)
                  })}
                </p>
              ) : ('')}
            </div>
          </div>  
    )
}