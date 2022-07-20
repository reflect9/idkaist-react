import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';
import "./Education.scss";

import Undergraduate from './Undergraduate.js';
import Master from './Master.js';
import PhD from './PhD.js';
import International from './International.js';

function Education() {
  // const navigate = useNavigate();
  // let { course } = useParams();
  // // let course = props.course;
  // if (typeof course == "undefined") course = "undergraduate";
  // console.log(course);
  const [tab, setTab] = useState("Undergraduate");
  const { t } = useTranslation();

  let tabContent;
  if (tab == "Undergraduate") {
    tabContent = (<div>
      <Undergraduate />
    </div>);
  } else if (tab == "Master") {
    tabContent = (<div>
      <Master />
    </div>);
  } else if (tab == "PhD") {
    tabContent = (<div>
      <PhD />
    </div>);
  } else if (tab == "International") {
    tabContent = (<div>
      <International />
    </div>);
  }
  // const changeTab = (newTab)=>{
  //   // navigate(newTab);
  //   setTab(newTab);
  // };
  return (
    <div className="Education">
      <Menu />
      <PageHeader Section="Education"/>
      <div className="PageContentWrapper">
        {/* <div className="PageTitle">
          {t("Menu.Education")}
        </div> */}
        <div className="PageContent">
          <p>
          [전반적인 교육 과정에 대한 내용 설명] [이미지 있으면 좋을듯?]
          </p>
          <div className="tabNav">
            <ul>
              {/* <li className="active"><a href="/education/undergraduate">{t('Menu.Undergraduate')}</a></li>
              <li className="active"><a href="/education/master">{t('Menu.Master')}</a></li>
              <li className="active"><a href="/education/phd">{t('Menu.PhD')}</a></li>
              <li className="active"><a href="/education/international">{t('Menu.International')}</a></li> */}
              <li className={tab == "Undergraduate" ? 'active' : null} onClick={() => { setTab("Undergraduate") }}><button>{t("Menu.Undergraduate")}</button></li>
              <li className={tab == "Master" ? 'active' : null} onClick={() => { setTab("Master") }}><button>{t("Menu.Master")}</button></li>
              <li className={tab == "PhD" ? 'active' : null} onClick={() => { setTab("PhD") }}><button>{t("Menu.PhD")}</button></li>
              <li className={tab == "International" ? 'active' : null} onClick={() => { setTab("International") }}><button>{t("Menu.International")}</button></li>
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

export default Education;
