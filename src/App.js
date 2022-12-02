import _ from "lodash";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from './components/Menu/Menu.js';

import Home from './views/Home/Home.js';
import Education from './views/Education/Education.js';
import About from './views/About/About.js';
import Research from './views/Research/Research.js';
import People from './views/People/People.js';
import Article from './views/Article/Article.js';
import ArticleList from './views/Article/ArticleList.js';
import ArticleEditor from './views/Article/ArticleEditor.js';

import Footer from '@components/Footer/Footer.js';
import ColorCodes from "@utils/ColorCodes.js";

import PageHeader from '@components/Page/PageHeader.js';

import './i18n';  // For Language support
// import logo from './logo.svg';
import './App.scss';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageHeader setIsMenuActive={setIsMenuActive} Section="" />} />
          <Route path="/home" element={<PageHeader setIsMenuActive={setIsMenuActive} Section=""/>} />
          <Route path="/education/*" element={<PageHeader setIsMenuActive={setIsMenuActive} Section="Education"/>} />
          <Route path="/research/*" element={<PageHeader setIsMenuActive={setIsMenuActive} Section="Research"/>} />
          <Route path="/people/*" element={<PageHeader setIsMenuActive={setIsMenuActive} Section="People"/>} />
          <Route path="/about/*" element={<PageHeader setIsMenuActive={setIsMenuActive} Section="About"/>} />
          <Route path="/articleList/*" element={<PageHeader setIsMenuActive={setIsMenuActive} Section=""/>} />
          <Route path="/article/*" element={<PageHeader setIsMenuActive={setIsMenuActive} Section=""/>} />
          <Route path="/articleEditor/*" element={<PageHeader setIsMenuActive={setIsMenuActive} Section=""/>} />
        </Routes>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/education" element={<Education />} /> */}
          <Route path="/education" element={<Education course='Undergraduate' />} />
            <Route path="/education/Undergraduate" element={<Education course='Undergraduate'/>} />
            <Route path="/education/Master" element={<Education course='Master'/>} />
            <Route path="/education/PhD" element={<Education course='PhD'/>} />
            <Route path="/education/International" element={<Education course='International'/>} />
          {/* <Route path="/education/master" element={<Education course='master'/>} />
          <Route path="/education/phd" element={<Education course='phd'/>} />
          <Route path="/education/international" element={<Education course='international'/>} /> */}
          <Route path="/research/*" element={<Research />} />
          <Route path="/about/*" element={<About />} />

          <Route path="/people/*" element={<People filter='All'/>} />
            <Route path="/people/All" element={<People filter='All'/>} />
            <Route path="/people/Faculty" element={<People  filter='Faculty'/>} />
            <Route path="/people/OldFaculty" element={<People  filter='OldFaculty'/>} />
            <Route path="/people/Staff" element={<People  filter='Staff'/>} />
            <Route path="/people/OtherFaculty" element={<People  filter='OtherFaculty'/>} />

          <Route path="/articleList" element={<ArticleList ArticleType='All'/>} />
            <Route path="/articleList/:articleType" element={<ArticleList/>} />
          
          <Route path="/article/:articleID" element={<Article/>} />

          <Route path="/articleEditor" element={<ArticleEditor/>} />
          <Route path="/articleEditor/:articleIDparam" element={<ArticleEditor/>} />
          {/* Add more routes here */}
        </Routes>

        {/* Routes for rendering footer (or skip for some pages) */}
        <Routes>
          <Route path="/research" element={<div/>} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
      {isMenuActive ? (<Menu setIsMenuActive={setIsMenuActive}/>):null}
      {isMenuActive ? (<div className="backdrop" onClick={()=>{setIsMenuActive(false)}}></div>): null}
    </Router>
  );
}

export default App;
