import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  awards,
  dataabout,
  meta,
  researchexperience,
  services,
  workexperience,
  worktimeline,
} from "../../content_option";

import React from "react";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Seonghee Lee CV | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">CV - Seonghee Lee</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
        <Col lang="5">
          <h3 className="color_sec py-4">Research Experience</h3>
        </Col>
        <Col lg="7">
          {researchexperience.map((data, i) => {
            return (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.period}</p>
                <p className="service_desc">{data.description}</p>
              </div>
            );
          })}
        </Col>
      </Row>
      <Row className="sec_sp">
      <Col lang="5">
        <h3 className="color_sec py-4">Work Experience</h3>
      </Col>
      <Col lg="7">
        {workexperience.map((data, i) => {
          return (
            <div className="service_ py-4" key={i}>
              <h5 className="service__title">{data.title}</h5>
              <p className="service_desc">{data.period}</p>
              <p className="service_desc">{data.description}</p>
            </div>
          );
        })}
      </Col>
    </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Organizations</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.period}</p>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
        <Col lang="5">
          <h3 className="color_sec py-4">Awards & Grants</h3>
        </Col>
        <Col lg="7">
          {awards.map((data, i) => {
            return (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.period}</p>
              </div>
            );
          })}
        </Col>
      </Row>
      </Container>
    </HelmetProvider>
  );
};
