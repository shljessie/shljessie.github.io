import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

import React from "react";
import altCanvas from "../../assets/research/altCanvas.png";
import cs224s from "../../assets/research/cs224s.png";
import h2o from "../../assets/research/h2o.png";
import multi from "../../assets/research/multi.png";
import teachyou from "../../assets/research/teachyou.png";

export const Portfolio = () => {

  var imglist=[altCanvas, cs224s, teachyou, multi]
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Research | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h3>📚 Selected Publications </h3>{" "}
            
          </Col>
        </Row>
        <div className="">
          {dataportfolio.map((data, i) => {
            
            return (
              <div key={i} className="researchBox">
                <div>
                  <img className="img_research" src={imglist[i]} alt="d"></img>
                </div>
                <div className="description">
                  <h5>{data.title}</h5>
                  <h6>{data.authors}</h6>
                  <h6>{data.conference}</h6>
                  <div>
                    <p>{data.description}</p>
                    {data.coming && <a className="d"> coming soon </a>}
                    {data.doi && (
                      <>
                        <a className="d" href={data.doi}>DOI</a>
                        {(data.video || data.project) && ' | '}
                      </>
                    )}
                    {data.video && (
                      <>
                        <a className="d" href={data.video}>Video</a>
                        {data.project && ' | '}
                      </>
                    )}
                    {data.project && <a className="d" href={data.project}>Project Code</a>}
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
