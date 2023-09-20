import "./style.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";

import { Link } from "react-router-dom";
import { Portfolio } from "../portfolio";
import { Projects } from "../projects";
import React from "react";
import Typewriter from "typewriter-effect";
import shlImage from '../../assets/images/shl.png';

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
            <br/>                <br/>
              <div className="intro mx-auto">
               <img width="200px" alt="" src={shlImage} />
                <h2 className="mb-1x">{introdata.title}</h2>
                <h6 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h6>
                <br/>
                <p className="mb-1x"> I am currently a first year <b>Computer Science (MS) student @Stanford</b> and I did my undergrad @Cornell studying Information Science. 
                I am currently working with <a href="https://cs.stanford.edu/~diyiy/group.html"> <b>Professor Diyi Yang</b></a> and <a href="https://hci.stanford.edu/msb/"><b>Professor Michael Bernstein</b></a> on LLM Agents for Social Learning and Adaptation.
                My research interests are in Natural Language Processing and Human AI Interaction. I am currently working on developing LLM agents that can adapt and align with user needs through interaction.
                Specifically, I want to focus on how we can model abstract information such as social values and user preferences into generative models.
                <br/> <br/>
                In the past I was a Research Assistant at the KAIST Interaction Lab (KIXLAB) - Professor Juho Kim on developing a Generative Agent for Programming Education. 
                I have also worked with Autonomous Vehicle companies such as <a href="https://motional.com/">Motional</a>, <a href="https://www.hyundaimotorgroup.com/main/mainRecommend">Hyundai Motor Group</a>, AI startups such as <a href="https://www.cochl.ai/">Cochl.AI</a> , and the <a href="https://lil.law.harvard.edu/">Harvard Berkman Klein Center- Library Innovation Lab</a>. 
                I have received grants and scholarships for my research like the Robert S Ann Morley Research Grant and the Gwanjeong Scholarship for my Master's Studies.</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      CV
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <a href="https://drive.google.com/file/d/1Lmo2ltgaVfgKaWcAA7m_F64Zz9lVg2Ct/view?usp=sharing">                  
                    <div id="button_h" className="ac_btn btn">
                      Download CV
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                    </a>
         
                </div>
              </div><p class="down"> ↓ Research & Projects  ↓</p>
            </div>
          </div>

     
          <div class="blob">
          <svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
        </div>
        </div>
      </section>
      <Portfolio/>
      <Projects/>
    </HelmetProvider>
  );

};
