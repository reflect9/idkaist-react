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
      <Menu/>
      <PageHeader  Section="About"/>
      <div className="PageContentWrapper">
        {/* <div className="PageTitle">
          About
        </div> */}
        <div className="PageContent">
          <div className="tabNav">
            <ul>
              <li className={tab=="Mission" ? 'active':null} onClick={()=>{setTab("Mission")}}><button>{t("About.tabs.Mission")}</button></li>
              <li className={tab=="History" ? 'active':null} onClick={()=>{setTab("History")}}><button>{t("About.tabs.History")}</button></li>
              <li className={tab=="Reputation" ? 'active':null} onClick={()=>{setTab("Reputation")}}><button>{t("About.tabs.Reputation")}</button></li>
              <li className={tab=="Contact" ? 'active':null} onClick={()=>{setTab("Contact")}}><button>{t("About.tabs.Contact")}</button></li>
            </ul>
          </div>
          <div className="tabContent">
            {tabContent}
          </div>
        </div>
      </div> 
    </div>
  );
}

export default About;
