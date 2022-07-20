import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from "react-i18next";
import { t } from '../../../node_modules/i18next/index';
import "./Footer.scss";

function Footer() {
    const { t, i18n, ready } = useTranslation();

    return (<div className="Footer" >
        <div className="column">
            <div className="sectionLink"><a href='/home'>{t("Menu.Home")}</a></div>
            <div className="sectionLink"><a href='/education'>{t("Menu.Education")}</a></div>
            <div className="sectionLink"><a href='/research'>{t("Menu.Research")}</a></div>
            <div className="sectionLink"><a href='/people'>{t("Menu.People")}</a></div>
            <div className="sectionLink"><a href='/about'>{t("Menu.About")}</a></div>
        </div>
        <div className="column2">
            <div className="address">
                <b>Department of Industrial Design, KAIST</b> <br />
                Bldg. N25, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea<br />
                대전시 유성구 대학로291 N25동 산업디자인학과<br />
                Tel. +82-42-350-4502~3 / Fax +82-42-350-4510<br />
                © IDKAIST. All Rights Reserved.<br />
            </div>
        </div>
        <div className="column">
            
        </div>
        
        
    </div>);
}

export default Footer;

