import React, { Component } from 'react';
import  {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { matchPath } from "react-router";
import ReactDOM from 'react-dom';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { t } from '../../../node_modules/i18next/index';
import "./Footer.scss";

import KAISTLogo from '@assets/logo-kaist.png';
import { ReactComponent as Idkaist } from '../Logo/idkaist-notext.svg';

function Footer() {
    const { t, i18n, ready } = useTranslation();
    const toggleLanguage = ()=>{
        console.log(i18n.language);
        if(i18n.language=="en") i18n.changeLanguage("kr");
        else i18n.changeLanguage("en");
    }
    return (<div className="Footer" >
        <div className="FooterSection">
            <div className="FooterContent" >
                <div className="department_info">
                    <Idkaist />
                    <p>
                        Department of Industrial Design, KAIST<br/>
                        한국과학기술원 산업디자인학과<br/>
                    </p>
                    <p>
                        {t("About.Address")}<br />
                        Tel. +82-42-350-4502~3 / Fax +82-42-350-4510<br />
                    </p>

                </div>
                <div className="shortcuts">
                    <Link to="/home"><div className="sectionLink">{t("Menu.Home")}</div></Link>
                    <Link to="/education"><div className="sectionLink">{t("Menu.Education")}</div></Link>
                    <Link to="/research"><div className="sectionLink">{t("Menu.Research")}</div></Link>
                    <Link to="/people"><div className="sectionLink">{t("Menu.People")}</div></Link>
                    <Link to="/about"><div className="sectionLink">{t("Menu.About")}</div></Link>
                </div>
            </div>
        </div>
        <div className="FooterSection">
            <div className="FooterContent" >
                <div className="left_column">
                    <p className='small'>© IDKAIST. All Rights Reserved.</p>
                </div>
                <div className="right_column">
                    <div className="languageSelector" onClick={toggleLanguage}>
                        {i18n.language}
                    </div>
                    <div className="kaist_logo">
                        <a href='https://kaist.ac.kr'><img src={KAISTLogo} className="KAIST_Logo" /></a>
                    </div>
                </div>
                
            </div>
            
        </div>    
        

    </div>);
}

export default Footer;

