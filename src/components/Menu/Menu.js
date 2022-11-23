import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { VscBook } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import "./Menu.scss";


function Menu({ setIsMenuActive }) {
  const { t, i18n, ready } = useTranslation();
  // const [language, setLanguage] = useState(i18n.language);
  const changeLanguage = (m) => {
    i18n.changeLanguage(m);
    // setLanguage(m);
  }
  useEffect(()=>{
    document.querySelector(".Menu").classList.remove("small");
  }, []);
  const closeMenu = ()=> {
    console.log("close!");
    document.querySelector(".Menu").classList.add("small");
    setTimeout(()=>{
      
      setIsMenuActive(false);
    },300);
  }
  return (
    <div className="Menu small">
      <div className="MenuCloseButton" onClick={closeMenu}>
        <GrClose />
      </div>
      <div className="menuToolBar">
        <div className="searchUI">
          <input type="text" className="input" placeholder="Search: Not Implemented Yet"/>
          <button type="submit">
            <BiSearch/>
          </button>
        </div>
        <div className="LanguageSelector" onClick={() => {
          if (i18n.language == "kr") changeLanguage("en");
          else changeLanguage("kr");
        }}>
          <span className={i18n.language == "kr" ? 'active' : null}>한글</span>&nbsp;&nbsp;&nbsp;
          <span className={i18n.language == "en" ? 'active' : null}>ENGLISH</span>
        </div>
      </div>
      <div className="MenuItems">
        <div className="L1">
          <Link onClick={closeMenu} to="/education">{t("Menu.Education")}</Link>
          <div className="L2">
            <Link onClick={closeMenu} to="/education/Undergraduate">{t("Menu.Undergraduate")}</Link>
            <Link onClick={closeMenu} to="/education/Master">{t("Menu.Master")}</Link>
            <Link onClick={closeMenu} to="/education/PhD">{t("Menu.PhD")}</Link>
            <Link onClick={closeMenu} to="/education/International">{t("Menu.International")}</Link>
          </div>
        </div>
        <div className="L1">
          <Link onClick={closeMenu} to="/research">{t("Menu.Research")}</Link>
          <div className="L2">
          </div>
        </div>
        <div className="L1">
          <Link onClick={closeMenu} to="/people">{t("Menu.People")}</Link>
          <div className="L2">
            <Link onClick={closeMenu} to="/people/All">{t("People.role.All")}</Link>
            <Link onClick={closeMenu} to="/people/Faculty">{t("People.role.Faculty")}</Link>
            <Link onClick={closeMenu} to="/people/OldFaculty">{t("People.role.OldFaculty")}</Link>
            <Link onClick={closeMenu} to="/people/Staff">{t("People.role.Staff")}</Link>
            <Link onClick={closeMenu} to="/people/OtherFaculty">{t("People.role.OtherFaculty")}</Link>
          </div>
        </div>
        <div className="L1">
          <Link onClick={closeMenu} to="/about">{t("Menu.About")}</Link>
          <div className="L2">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;