import _ from "lodash";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';
import PeopleData from "@data/People.json";
import LabData from "@data/Labs.json";
import { useTranslation } from 'react-i18next';
import "./People.scss";

function People() {
  const { t, i18n, ready } = useTranslation();
  const roles = ["Professor", "Associate Professor","Assistant Professor", "Research Professor", "Administrative Staff", "BF Staff", "Engineer"];
  const LabPeopleData = _.merge({}, LabData, PeopleData);
  let peopleEl = _.map(roles,(role)=>{
    let peopleOfTheRole = _.filter(LabPeopleData, (p)=>{
      return p.position == role;
    });
    return _.map(peopleOfTheRole, (p)=>{
      return (<div className="person">
        <div className="photo">
          <img src={"images/people/"+p.thumbnail}/>
        </div>
        <div className="name">
          {i18n.language=="kr"?p.name_kr:p.name_en}
        </div>
        <div className="position">{t("People.position."+p.position)}</div> 
        <div className="contact">
          {p.email} <br/> {p.phone} <br/> {p.office}
        </div>
        
      </div>);
    });
  });
  
  return (
    <div className="People">
      <Menu />
      <PageHeader Section="People" />
      <div className="PageContentWrapper">
        <div className="PageContent">
          {peopleEl}
        </div>
      </div>
    </div>
  );
}

export default People;
