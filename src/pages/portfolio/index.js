import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

import React from "react";
import h2o from "../../assets/research/h2o.png";
import multi from "../../assets/research/multi.png";
import teachyou from "../../assets/research/teachyou.png";

export const Portfolio = () => {

  var imglist=[teachyou, multi, h2o]
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
            <p>For more publications, please visit my <a href="https://scholar.google.com/citations?user=POepUzkAAAAJ&hl=en"> Google Scholar </a></p>
          </Col>
        </Row>
        <div className="">
          {dataportfolio.map((data, i) => {
            
            return (
              <div key={i} className="researchBox">
                <div>
                <img class="img_research" src={imglist[i]} alt="d"></img>
                </div>
                <div className="description">
                  <h5>{data.title}</h5>
                  <h6>{data.authors}</h6>
                  <div>
                  <p>{data.description}</p>
                  {data.coming && <a class="d"> coming soon </a>}
                  {data.link && <a class="d" href={data.link}>pdf </a>}
                  {data.link && data.video && ' | '}
                  {data.video && <a class="d" href={data.video}>video </a>}
                  {data.video && data.news && ' | '}
                  {data.news && <a class="d" href={data.news}>news </a>}
                  {data.news && data.code && ' | '}
                  {data.code && <a class="d" href={data.code}>code </a>}
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
