import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';
import "./About.scss";

function About() {
  const [tab, setTab] = useState("Mission");
  const { t } = useTranslation();
    
  let tabContent;
  if(tab=="Mission") {
    tabContent = (<div className='mission'>
      <img className='shapethefuture' src='images/shapethefuture.jpg'/>
      <div className='slogan'>
        {/* Shape the Future<br/>Design for a Better Life<br/>
        <div className="small">기술을 통찰하고 인간화하여 더 나은 삶을 만든다</div> */}
      </div>
      <div className="description">
      
      </div>
    </div>);
  } else if (tab=="History") {
    tabContent = (<div>
      <h2>History</h2>
    </div>);
  } else if (tab=="Reputation") {
    tabContent = (<div>
      <h2>Reputation</h2>
    </div>);
  } else if (tab=="Contact") {
    tabContent = (<div>
      <h2>Contact</h2>
    </div>);
  }
  return (
    <div className="About">
      <div className="coverImage">
        <img src="images/department/KAlounge_03.jpg" />
      </div>
      <div className="PageContentWrapper">
        <div className="section_summary">
          <h2>About ID KAIST</h2>
          {t("About.Mission")}
        </div>
        <div className="banner_light">
          <div className="tag">MISSION</div>
          <div className="content">
            <div className="title"><em>Shape the Future:</em> Design for a Better Life</div>
            <div className="description">
            · Cultivate designers active in the front end of innovation<br/>
            · Generate integrated design knowledge<br/>
            · Become a leading research-oriented design education program<br/>
            </div>
          </div>
        </div>
        <div className="banner_dark">
          <div className="tag">VISION</div>
          <div className="content">
            <div className="description">
            ID KAIST strives to be a new design school that leads the design field for the 4th Industrial Revolution. ID KAIST has enormous potentials in that it <em>fosters designers who create innovative, integrated, and aesthetic solutions to problems that industry and society face,</em> based on in-depth understandings of people, technology, business, and society. 
            </div>
          </div>
        </div>
        <div className="banner_noframe">
          <p>The following advantages of ID KAIST will play a decisive role in realizing its potential:
            <ul>
              <li>Outstanding faculty from various backgrounds, from design to technology</li>
              <li>Excellent students who are passionate about design and technology</li>
              <li>World-class research-centered convergent design graduate school</li>
              <li>Close collaboration with various departments at KAIST</li>
              <li>Pursuing positive and sustainable impacts for a better life of mankind</li>
              <li>Future-oriented design research on diverse topics</li>
            </ul>
            ID KAIST has held since 2016 the Design 3.0 Forum, an annual international event that explores new possibilities for design education and research in the era of the 4th Industrial Revolution. Looking ahead to the future, ID KAIST aims to create a positive and sustainable impact that enables a better life and future for the whole of mankind, through human-centered research and education.
          </p>
        </div>
        <div className="badges">
          <div className="badge badge_red shadow-box">
            <div className="title content">223</div>
            <div className="description">Paper publications from 2016 to 2021</div>
          </div>
          <div className="badge badge_black shadow-box">
          <div className="title content">$5M</div>
            <div className="description">Research Grants Awarded in 202</div>
          </div>
          <div className="badge badge_red shadow-box">
            <div className="title content">57</div>
            <div className="description">Patents from 2016 to 2021</div>
          </div>
          <div className="badge badge_black shadow-box">
            <div className="title content">36</div>
            <div className="description">SCI/SSCI journal papers from 2016 to 2021</div>
          </div>
        </div>
        <div className="banner_noframe">
          <h3>History</h3>
          <p>Focusing on humans, technology, and business for the past 25 years, ID KAIST has been recognized as being among the top 30 design schools in the world. Over the next 15 years, we will pursue design-driven convergence between education and research to establish a world-leading design school with a new paradigm of design and the human life.
            <ul className="historyTable">
              <li><span className="year">1971</span> KAIST Extablished</li>
              <li><span className="year">1986</span> ID KAIST Extablished</li>
              <li><span className="year">1990</span> First BSID Graduation</li>
              <li><span className="year">1991</span> Post-graduate Program Launched</li>
              <li><span className="year">2002</span> Doctoral Program Launched</li>
              <li><span className="year">2006</span> Leaping toward globalization
                <ul className="smallTable">
                  <li>Participation in BK21 program</li>
                  <li>Participation in the WCU (World Class University) program</li>
                  <li>Selected as one of BusinessWeek's 60 best design programs</li>
                  <li>Organizing 'Catch the Future' workshop</li>
                  <li>Selected as one of BusinessWeek's 30 best design programs</li>
                </ul>
              </li>
            </ul>
            ID KAIST has held since 2016 the Design 3.0 Forum, an annual international event that explores new possibilities for design education and research in the era of the 4th Industrial Revolution. Looking ahead to the future, ID KAIST aims to create a positive and sustainable impact that enables a better life and future for the whole of mankind, through human-centered research and education.
          </p>
        </div>
      </div> 
    </div>
  );
}

export default About;
