import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';
import LabList from "@components/LabList/LabList.js";
import Lab from "@components/Lab/Lab.js";

import "./Research.scss";

function Research() {
  const [labID, setLabID] = useState();
  const { t } = useTranslation();

  let content;
  if (typeof labID === "undefined") {
    // No Lab Selected
  } else {
    content = <Lab labID={labID}/>
  }

  return (
    <div className="Research">
      <Menu />
      <PageHeader  Section="Research"/>
      <LabList onChooseLab={setLabID} currentLab={labID}/>
      {content}
    </div>
  );
}

export default Research;
