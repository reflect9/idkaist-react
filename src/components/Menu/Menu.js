import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { VscBook } from "react-icons/vsc";
import Logo from '@assets/logo-idkaist.js';
import "./Menu.scss";

import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu as MenuRPS,
  MenuItem,
  SubMenu
} from 'react-pro-sidebar';

function Menu() {
  const { t, i18n, ready } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);
  // const [language, setLanguage] = useState(i18n.language);
  const toggleMenu = () => {
    setCollapsed(!collapsed);
  }
  const changeLanguage = (m) => {
    i18n.changeLanguage(m);
    // setLanguage(m);
  }
  let backdrop = undefined;
  if (collapsed === false) {
    backdrop = <div className="backdrop" onClick={toggleMenu}></div>
  }

  return (
    <div className="Menu">
      <div className="MenuOpenButton" onClick={toggleMenu}>
        {/* <VscBook/> */}
        {/* <img src={DepartmentLogo} fill="red"/> */}
        <Logo fill="#222" />
      </div>
      {backdrop}
      <ProSidebar collapsed={collapsed}>
        {/* <div className="LanguageSelector">
          <span className={i18n.language == "kr" ? 'active' : null}
            onClick={() => changeLanguage("kr")}>Kr</span>&nbsp;
          <span className={i18n.language == "en" ? 'active' : null}
            onClick={() => changeLanguage("en")}>En</span>
        </div> */}
        <div className="MenuCloseButton" onClick={toggleMenu}>
          {/* <VscBook/> */}
          <Logo fill="white" />
        </div>
        <MenuRPS iconShape="square">
          <MenuItem>{t("Menu.Home")}
            <Link to="/home" />
          </MenuItem>
          {/* <MenuItem>{t("Menu.Highlights")}</MenuItem> */}
          <MenuItem>{t("Menu.Education")}
            <Link to="/education"/>
          </MenuItem>
          {/* <SubMenu title={t("Menu.Education")}>
            <MenuItem>{t("Menu.Undergraduate")}
              <Link to="/education/undergraduate"/>
            </MenuItem>
            <MenuItem>{t("Menu.Master")}
              <Link to="/education/master"/>
            </MenuItem>
            <MenuItem>{t("Menu.PhD")}
              <Link to="/education/phd"/>
            </MenuItem>
            <MenuItem>{t("Menu.International")}
              <Link to="/education/international"/>
            </MenuItem>
          </SubMenu> */}
          <MenuItem>{t("Menu.Research")}
          <Link to="/research"/>
          </MenuItem>
          <MenuItem>{t("Menu.People")} <Link to="/people" /></MenuItem>
          <MenuItem>{t("Menu.About")} <Link to="/about" /></MenuItem>
        </MenuRPS>
        {/* <SidebarFooter>
            ID KAIST
          </SidebarFooter> */}
      </ProSidebar>
      {/* <ul className="MenuItems">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/highlights">Highlights</Link></li>
          <li><Link to="/labs">Labs</Link></li>
          <li><Link to="/people">People</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul> */}
    </div>
  );
}

export default Menu;
