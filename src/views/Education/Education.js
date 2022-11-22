import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import "./Education.scss";

import Undergraduate from './Undergraduate.js';
import Master from './Master.js';
import PhD from './PhD.js';
import International from './International.js';

function Education({course}) {
  const { t } = useTranslation();
  let courseContent;
  if (course == "Undergraduate") {
    courseContent = (<div>
      <Undergraduate />
    </div>);
  } else if (course == "Master") {
    courseContent = (<div>
      <Master />
    </div>);
  } else if (course == "PhD") {
    courseContent = (<div>
      <PhD />
    </div>);
  } else if (course == "International") {
    courseContent = (<div>
      <International />
    </div>);
  }
  return (
    <div className="Education">
      <div className="coverImage">
        <img src="/images/department/students_prototyping.png" />
      </div>
      <div className="tabNav">
          <ul>
            <li className={course == "Undergraduate" ? 'active' : null} > <Link to="/education/Undergraduate">{t("Menu.Undergraduate")}</Link> </li>
            <li className={course == "Master" ? 'active' : null} > <Link to="/education/Master">{t("Menu.Master")}</Link> </li>
            <li className={course == "PhD" ? 'active' : null} > <Link to="/education/PhD">{t("Menu.PhD")}</Link> </li>
            <li className={course == "International" ? 'active' : null} > <Link to="/education/International">{t("Menu.International")}</Link></li>
          </ul>
      </div>
      <div className="PageContentWrapper">
        <div className="PageContent">
          <div className="tabContent">
            {courseContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
