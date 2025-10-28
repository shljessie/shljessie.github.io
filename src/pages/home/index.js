import "./style.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { introdata, meta } from "../../content_option";

import darkProfile from '../../assets/images/darkprofile.png';
import lightProfile from '../../assets/images/profile2.png';
import vidi from '../../assets/images/vidi.png';

export const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme) {
        setTheme(currentTheme);
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    return () => observer.disconnect();
  }, []);
  
  const profileImage = theme === "dark" ? darkProfile : lightProfile;
  
  // Software videos data - you can add your video URLs here
  const softwareVideos = [
    {
      title: "XeleR",
      description: "AI powered coding assistant for Unity.",
      authors: "Made by: Nathan Trisha, Adrian, Ashal, and me",
      videoUrl: "https://www.youtube.com/embed/Mp_YbdUxzi8"
    },
    {
      title: "AltCanvas",
      description: "AI-powered image editor for accessibility",
      videoUrl: "https://www.youtube.com/embed/tJUqjjwSxPs",
      link: "https://shljessie.github.io/AltCanvas/"
    },
    {
      title: "TeachYou",
      description: "LLM-based teachable agent for programming",
      videoUrl: "https://www.youtube.com/embed/MEtcA6GjfAg",
      link: "https://jhw123.github.io/project/teachyou"
    },
    {
      title: "Vidi",
      description: "Video Assistant Agent for Blind and Low Vision Users",
      authors: "Made by: Lorenzo, Trini, Maria and me", // Add your video URL
      imageUrl: "../../assets/images/vidi.png",
      link: "https://github.com/shljessie/VideoChat"
    }
  ];
  
  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setCurrentVideo(value);
  };
  
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
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
                <div className="intro-content">
                  <div className="intro-left">
                    <img width="500px" alt="" src={profileImage} />
                  </div>
                  <div className="intro-right">
                    <h2 className="mb-1x">{introdata.title}</h2>
                    <p className="intro-email"><a href="mailto:shlee@cs.stanford.edu">shlee@cs.stanford.edu</a></p>
                    
                    <p className="intro-bio">
                    AI Platform Software Engineer @ <b>NVIDIA</b>.<br></br><br></br>
                    I currently work on AI Inference Product Development. <br></br>
                    This portfolio shows the cool projects I have worked on and papers I have wrote.<br></br>
                    Previously @ <b>Stanford</b> (Compuer Science MS), <b>Microsoft Research</b> and other great places!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

     
          {/* Google Experiments inspired geometric shapes */}
          <div className="geometric-shape"></div>
        </div>
        
        {/* Pieces of Software Section */}
        <div className="software-section">
          <div className="container">
            <h2 className="software-title">Pieces of Software &lt;/&gt;</h2>
            <p className="software-subtitle">some pieces of software I made some with great team members some by myself :)</p>
            <div className="software-carousel">
              <div className="carousel-track" style={{ transform: `translateX(-${currentVideo * 100}%)` }}>
                {softwareVideos.map((video, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="video-card">
                      <div className="video-container">
                        {video.videoUrl ? (
                          <iframe
                            src={video.videoUrl}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <div className="video-placeholder">
                            <img src={vidi} alt={video.title}         style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </div>
                        )}
                      </div>
                      <div className="video-info">
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                        <p>{video.authors}</p>
                        {video.link && (
                          <a href={video.link} target="_blank" rel="noreferrer" className="software-link">
                            View Project →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slider-progress">
              <div className="slider-wrapper">
                <div className="slider-container">
                  <input
                    type="range"
                    min="0"
                    max={softwareVideos.length - 1}
                    value={currentVideo}
                    onChange={handleSliderChange}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                    className={`video-slider ${isDragging ? 'dragging' : ''}`}
                  />
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ width: `${(currentVideo / (softwareVideos.length - 1)) * 100}%` }}
                    ></div>
                  </div>
                  <div className="slider-markers">
                    {softwareVideos.map((_, index) => (
                      <div
                        key={index}
                        className={`slider-marker ${index === currentVideo ? 'active' : ''}`}
                        style={{ left: `${(index / (softwareVideos.length - 1)) * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="slide-info">
                <span className="slide-counter">
                  Project {currentVideo + 1} of {softwareVideos.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Publications summary below software */}
      <section className="home">
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <h2 className="section-title" style={{marginBottom: '0.5rem'}}>Publications</h2>
          <p className="citation-count" style={{marginBottom: '0.5rem'}}>122 papers have cited my work!</p>
          <p className="publication-note" style={{marginBottom: '1rem'}}>
            I wrote papers in HCI on accessibility and AI, multimodal agents at Microsoft Research,
            coding agents, and autonomous vehicles. If you're curious, check out my
            {" "}
            <a href="https://scholar.google.com/citations?user=POepUzkAAAAJ&hl=en" target="_blank" rel="noreferrer" className="subtle-link">Google Scholar</a>.
          </p>
        </div>
      </section>
      <footer style={{textAlign: 'center', padding: '24px 0', color: 'var(--text-color-2)'}}>
        website made by me & cursor
      </footer>
    </HelmetProvider>
  );

};
