import React, { useState } from 'react';
import {Github, Youtube, BoxArrowUpRight} from 'react-bootstrap-icons'

export default function ProjectCard({type, id, deployedLink, youtubeLink, imgSrc, imgAlt, name, repoLink, description, development, technologies}){
  const [expanded, setExpanded] = useState(false);

  const toggleDiv = () => {
    setExpanded(!expanded);
  }
  return (
    <>
      {type === 'featured' ? (
        <div className="row d-flex flex-row justify-content-center align-items-top m-2 py-3 px-4 col-sm-12 col-md-5">
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
              {description && (
                <p className="card-text">{description}</p>
              )}
              <button
                className="custom-btn mb-3"
                type="btn"
                data-bs-toggle="collapse"
                data-bs-target={`#${id}`}
                aria-expanded="false"
                aria-controls={id}
                onClick={toggleDiv}
              >
                {expanded ? 'Less on development' : 'More on development'}
              </button>
              {development && (
                <div className="collapse" id={id}>
                  <p className="card-text">{development}</p>
                </div>
              )}
                {technologies && (
                  <div>
                    <p className="tech-used">Technologies:</p>
                    <p>
                      {technologies.split(', ')
                        .map((tech) => {
                          return (<span className="custom-badge px-1 me-1">{tech}</span>)
                      })}
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>  
      ) : (
        <div className="custom-card col-sm-12 p-2 m-1">
          <div className="row d-flex">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="card-img-custom col-sm-3 m-1 align-self-center"
            />
            <div className='col-sm-8'>
              <div className="d-flex">
                <h3 className="custom-title m-1 py-2">
                  <a className="custom-title" href={deployedLink ? `${deployedLink}` : `${repoLink}`}>
                    {name}
                  </a>
                </h3>
                <div className="py-1">
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
              <p>{description}</p>
            </div>
          </div>
          <div className="m-1 col-sm-12">
            {technologies && (
              <div>
                <p className="tech-used">Technologies:</p>
                <p>
                  {technologies.split(', ')
                    .map((tech) => {
                      return (<span className="custom-badge px-1 me-1">{tech}</span>)
                  })}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}