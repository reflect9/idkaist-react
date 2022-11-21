import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';
import LabList from "@components/LabList/LabList.js";
import Lab from "@components/Lab/Lab.js";
import { BsBoxArrowInUpLeft } from "react-icons/bs";

import "./Research.scss";

function Research() {
  const [labID, setLabID] = useState();
  const { t } = useTranslation();

  let pageContent;
  if (typeof labID === "undefined") {
    pageContent = (
      <div className="PageContentWrapper">
        <h2>Research @ IDKAIST</h2>
        {t("Research.overview")}
      </div>
    );
  } else {
    pageContent = (
      <div className="PageContentWrapper">
        <a className="BackToLabs" onClick={()=>{setLabID(undefined)}}>
          {/* Back to Labs */}
          <BsBoxArrowInUpLeft/>
        </a>
        <Lab labID={labID}/>
      </div>
    );
  }

  return (
    <div className="Research">
      <PageHeader  Section="Research"/>
      {/* <div className="coverImage">
        <img src="images/department/building.jpg" />
      </div> */}
      {pageContent}
      
      <LabList onChooseLab={setLabID} currentLab={labID}/>
    </div>
  );
}

export default Research;
