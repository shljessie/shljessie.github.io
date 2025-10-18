import "./style.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";

import { Portfolio } from "../portfolio";
import { Projects } from "../projects";
import React from "react";
import shlImage from '../../assets/images/microsoft_headshot.png';

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
               <img width="500px" alt="" src={shlImage} />
                <h2 className="mb-1x">{introdata.title}</h2>
                <p><a href="mailto:shlee@cs.stanford.edu">shlee@cs.stanford.edu</a></p>

                {/* 
                Commenting out typewriter effect
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
                */}

                <p style={{fontSize:"small"}}>You can clone and use this website from <a href="https://github.com/shljessie/shljessie.github.io" target="_blank" rel="noreferrer">my GitHub</a></p>

                <br/>
                <p className="mb-1x"> Hello! :) I'm Seonghee, a second-year <b>Computer Science (MS) student @Stanford University</b>. <br></br>
                I am advised by <a href="https://web.stanford.edu/~diyiy/" rel="noreferrer"><b>Professor Diyi Yang</b></a> (Stanford NLP) and <a href="https://haridecoded.com/" rel="noreferrer"><b>Professor Hari Subramonyam</b></a> (Stanford HCI).<br></br> 
                I have also worked at <b>Microsoft Research</b> on Multimodal Agent Interaction in Open Spaces—Project Transcendence (HCAIX)
                under the guidance of Kori Inkpen, John Tang, Asta Roseway, and Sasa Junuzovic. <br></br><br></br>
                I have experience in machine learning, particularly in fine-tuning and training large-scale vision and language models,
                web development, backend infrastructure, and programming. <br></br>
                I really like gitHub's design, Apple's WWDC conferences, and learning more about developing accessible technology.</p>
                <div className="intro_btn-action pb-5">
                  <a href="https://drive.google.com/file/d/1R3HEipS15I9qAyvodmtpF8BQYJRvdOoJ/view?usp=sharing">                  
                    <div id="button_h" className="ac_btn btn">
                      Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                    </a>
         
                </div>
              </div><p class="down"> ↓ Research & Projects  ↓</p>
            </div>
          </div>

     
          {/* Google Experiments inspired geometric shapes */}
          <div className="geometric-shape"></div>
          <div className="geometric-shape"></div>
          <div className="geometric-shape"></div>
        </div>
      </section>
      <Portfolio/>
      <Projects/>
    </HelmetProvider>
  );

};
