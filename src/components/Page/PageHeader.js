import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import DepartmentLogo from '@assets/logo-idkaist.svg';
import { FiSearch, FiUser } from "react-icons/fi";
import { AiOutlineFilter } from "react-icons/ai";

import "./Page.scss";

let PageHeader = ({Section}) => {
    const { t, i18n, ready } = useTranslation();
    const changeLanguage = (m) => {
        i18n.changeLanguage(m);
        // setLanguage(m);
    }
    return (
        <div className="PageHeader">
            <div className="HeaderCenter">
                <div className={Section=="Home"?"sectionLink active":"sectionLink"}><Link to='/home'>{t("Menu.Home")}</Link></div>
                <div className={Section=="Education"?"sectionLink active":"sectionLink"}><Link to='/education'>{t("Menu.Education")}</Link></div>
                <div className={Section=="Research"?"sectionLink active":"sectionLink"}><Link to='/research'>{t("Menu.Research")}</Link></div>
                <div className={Section=="People"?"sectionLink active":"sectionLink"}><Link to='/people'>{t("Menu.People")}</Link></div>
                <div className={Section=="About"?"sectionLink active":"sectionLink"}><Link to='/about'>{t("Menu.About")}</Link></div>
                {/* <form>
                        <input type="search" placeholder="Search..."/>
                        <button type="submit">
                            <FiSearch/>    
                        </button>
                    </form>
                    <AiOutlineFilter  className="filterButton" /> */}
            </div>
            <div className="HeaderRight">
                <FiSearch />
                {/* <FiUser /> */}
                <div className="LanguageSelector">
                    <span className={i18n.language == "kr" ? 'active' : null}
                        onClick={() => changeLanguage("kr")}>{t('Locale.Kr')}</span>&nbsp;
                    <span className={i18n.language == "en" ? 'active' : null}
                        onClick={() => changeLanguage("en")}>{t('Locale.En')}</span>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
