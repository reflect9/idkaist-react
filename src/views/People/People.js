import _ from "lodash";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';
import PeopleData from "@data/People.json";
import LabData from "@data/Labs.json";
import { MdHome } from "react-icons/md";

import { useTranslation } from 'react-i18next';
import "./People.scss";

function People({filter}) {
  // const [tab, setTab] = useState("All");
  const { t, i18n, ready } = useTranslation();
  const roles = ["Faculty", "OldFaculty", "Staff", "OtherFaculty"];
  const LabPeopleData = _.merge({}, LabData, PeopleData);
  // console.log(LabPeopleData);
  // method for rendering individual
  const renderPerson = (p)=>{
    return (<div className="person">
        <div className="photo">
          <img src={"/images/people/"+p.thumbnail}/>
        </div>
        <div className="name_and_lab">
          <div className="name">
            {i18n.language=="kr"?p.name_kr:p.name_en}
          </div>
          {p.lab_url ? (
            <div className="lab" onClick={()=>{window.open(p.lab_url);}}>
              <MdHome/>
          </div>
          ):null}
        </div>
        <div className="position">{t("People.position."+p.position)}</div> 
        <div className="contact">
          {p.email} <br/> {p.phone} <br/> {p.office}
        </div>
      </div>);
  }
  // method for rendering everyone filtered
  let peopleEl = _.map(LabPeopleData,(p)=>{
    if (filter !="All" && p.role != filter) return;
    else {
      return renderPerson(p);
    }
  }).filter(e=>e);
  // composing Layout including banners
  let withBanner = [];
  if (peopleEl.length>0) { 
    withBanner.push(<div className="L_1x4">
      {peopleEl.slice(0,4)}
    </div>);
  } 
  if (peopleEl.length>4) {
    withBanner.push(<div className="L_2x2">
      {peopleEl.slice(4,8)}
    </div>);
    withBanner.push(<div className="L_2x2_right">
      <img className="banner" src="https://source.unsplash.com/random/600x800"/>
    </div>);
  }
  if (peopleEl.length>12) {
    withBanner.push(<div className="L_1x4">
      {peopleEl.slice(8,12)}
    </div>);
    withBanner.push(<div className="L_2x4">
      <img className="banner" src="https://source.unsplash.com/random/1100x600"/>
    </div>);
    withBanner.push(<div className="L_1x4">
      {peopleEl.slice(12,100)}
    </div>);
  }


  return (
    <div className="People">
      <div className="tabNav">
          <ul>
            <li className={filter == "All" ? 'active' : null} > <Link to="/people/All">{t("People.role.All")}</Link> </li>
            {roles.map(r => (
              <li className={filter == r ? 'active' : null}>  <Link to={"/people/"+r}>{t("People.role."+r)}</Link> </li>
            ))}
          </ul>
      </div>
      <div className="PageContentWrapper">
        <div className="PageContent">
          <div className="PeopleViewer">
            {withBanner}
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
