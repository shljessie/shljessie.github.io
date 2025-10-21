import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

import React from "react";
import altCanvas from "../../assets/research/altCanvas.png";
import teachyou from "../../assets/research/teachyou.png";
import irlditto from "../../assets/images/irl-ditto.png";

export const Portfolio = () => {
  const images = [altCanvas, teachyou, irlditto];
  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Research | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-4">
          <Col lg="12">
            <h2 className="section-title">📚 Selected Publications</h2>
            <p className="citation-count">Total Citations: 122</p>
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
