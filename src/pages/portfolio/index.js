import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

import React from "react";
import altCanvas from "../../assets/research/altCanvas.png";
import cs224s from "../../assets/research/cs224s.png";
import multi from "../../assets/research/multi.png";
import teachyou from "../../assets/research/teachyou.png";

export const Portfolio = () => {
  const images = [altCanvas, cs224s, teachyou, multi];
  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Research | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8" style={{marginTop: '20%'}}>
            <h3>📚 Selected Publications </h3>{" "}
            
          </Col>
        </Row>
        <div className="po_items_ho">
          {dataportfolio.map((data, i) => {
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
                  <div className="card-authors">{data.authors}</div>
                  <div className="card-conference">{data.conference}</div>
                  <div className="card-description">
                    {data.description}
                  </div>
                  <div className="card-actions">
                    {data.coming && <span>Coming Soon</span>}
                    {data.doi && <a href={data.doi} target="_blank" rel="noreferrer">DOI</a>}
                    {data.video && <a href={data.video} target="_blank" rel="noreferrer">Video</a>}
                    {data.project && <a href={data.project} target="_blank" rel="noreferrer">Project</a>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{marginBottom: '40px'}}> .......etc.   For more publications, please visit my <a href="https://scholar.google.com/citations?user=POepUzkAAAAJ&hl=en"> Google Scholar </a></p>
      </Container>
    </HelmetProvider>
  );
};
