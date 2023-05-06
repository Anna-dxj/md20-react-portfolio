import React from 'react';
import {Github, BoxArrowUpRight} from 'react-bootstrap-icons'

export default function ProjectCard({deployedLink, imgSrc, imgAlt, name, repoLink, description, technologies}){
    return (
        <div className="card row d-flex flex-row justify-content-center align-items-start m-2 p-1 shadow col-sm-12 col-md-5">
          <img 
            src={imgSrc} 
            alt={`Screenshot of ${imgAlt}`}
            className="card-img-top col-md-6 pt-4"
          />
            <div className="card-body col-md-6">
              <div className="d-flex flex-row justify-content-between">
                <h3 clsasName="card-title col-md-5">{name}</h3>
                <div className="col-md-6 d-flex flex-row">
                  <a href={deployedLink}>
                    <BoxArrowUpRight width="20" height="20" className="m-2" />
                  </a>
                  <a href={repoLink}>
                    <Github width="25" height="25" className="m-2"/>
                  </a>
                </div>
              </div>
              <p className="card-text">{description}</p>
              {technologies ? (
                <p className="card-text">
                  {technologies.split(', ')
                    .map((tech) => {
                      return (<span className="badge bg-secondary me-1">{tech}</span>)
                  })}
                </p>
              ) : ('')}
            </div>
          </div>  
    )
}