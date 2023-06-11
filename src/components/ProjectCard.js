import React from 'react';
import {Github, Youtube, BoxArrowUpRight} from 'react-bootstrap-icons'

export default function ProjectCard({deployedLink, youtubeLink, imgSrc, imgAlt, name, repoLink, description, technologies}){
  return (
    <div className="row d-flex flex-row justify-content-center align-items-center m-2 py-3 px-4 col-sm-12 col-md-5 custom-card-background">
      <div className="d-flex flex-column justify-content-center custom-card px-2 py-3">
        <img 
          src={imgSrc} 
          alt={`Screenshot of ${imgAlt}`}
          className="card-img-top col-md-6 pt-4 px-2"
        />
        <div className="card-body col-md-12 py-2 px-3">
          <div className="d-flex flex-row justify-content-between">
            <h3 className="d-flex align-self-center custom-title col-md-8 m-1 py-2">
              <a className="custom-title" href={deployedLink ? `${deployedLink}` : `${repoLink}`}>
              {name}
              </a>
            </h3>
            <div className="col-md-3 d-flex flex-row flex-row justify-content-end align-items-center">
              {deployedLink && (
                <a href={deployedLink} target="_blank" className="custom-link">
                  <BoxArrowUpRight width="20" height="20" className="m-2" />
                </a>
              )}
              {youtubeLink && (
                <a href={youtubeLink} target="_blank" className="custom-link">
                  <Youtube width="25" height="25" className="m-2" />
                </a>
              )}
              {repoLink && (
                <a href={repoLink} target="_blank"className="custom-link">
                  <Github width="25" height="25" className="m-2"/>
                </a>
              )}
            </div>
          </div>
          <p className="card-text">{description}</p>
            {technologies ? (
              <p className="">
                {technologies.split(', ')
                  .map((tech) => {
                    return (<span className="custom-badge px-1 me-1">{tech}</span>)
                })}
              </p>
            ) : ('')}
        </div>
      </div>
    </div>  
  )
}