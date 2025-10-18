import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, projectportfolio } from "../../content_option";

import ET from "../../assets/project/ET.png";
import React from "react";
import books from "../../assets/project/books.png";
import carpoint from "../../assets/project/carpoint.png";
import cochl from "../../assets/project/cochl.png";
import mci from "../../assets/project/mci.png";
import reddit from "../../assets/project/reddit.png";
import remote from "../../assets/project/remote.png";

export const Projects = () => {
  const images = [books, reddit, cochl, mci, ET, carpoint, remote];
  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h3>👩‍💻 Software Tools & Projects </h3>{" "}
          </Col>
        </Row>
        <div className="po_items_ho">
          {projectportfolio.map((data, i) => {
            const projectImage = images[i];
            
            return (
              <div key={i} className="po_item">
                <div className="card-header">
                  <div className="card-image">
                    <img src={projectImage} alt={data.title} />
                  </div>
                </div>
                <div className="card-content">
                  <h5 className="card-title">{data.title}</h5>
                  <div className="card-description">
                    {data.description}
                  </div>
                  <div className="card-actions">
                    {data.github && <a href={data.github} target="_blank" rel="noreferrer">GitHub</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noreferrer">Website</a>}
                    {data.paper && <a href={data.paper} target="_blank" rel="noreferrer">Paper</a>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
