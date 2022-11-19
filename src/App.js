import _ from "lodash";
import React from "react";
import  {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './views/Home/Home.js';
import Education from './views/Education/Education.js';
import About from './views/About/About.js';
import Research from './views/Research/Research.js';
import People from './views/People/People.js';
import Article from './views/Article/Article.js';
import ArticleList from './views/Article/ArticleList.js';

import Footer from '@components/Footer/Footer.js';
import ColorCodes from "@utils/ColorCodes.js";


import './i18n';  // For Language support
import logo from './logo.svg';
import './App.scss';




function App() {
  // let colorTheme = _.sample(Object.values(ColorCodes));
  // let AppStyle = {
  //   "background": colorTheme.primary,
  //   "background": "linear-gradient(0deg, "+colorTheme.primary+" 0%, "+colorTheme.secondary+" 100%)"
  // };
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/education" element={<Education />} /> */}
          <Route path="/education" element={<Education/>} />
          {/* <Route path="/education/master" element={<Education course='master'/>} />
          <Route path="/education/phd" element={<Education course='phd'/>} />
          <Route path="/education/international" element={<Education course='international'/>} /> */}
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/article/:articleID" element={<Article />} />
          <Route path="/articleList" element={<ArticleList />} />
          {/* Add more routes here */}
        </Routes>
      </Router>
      <Footer/>
    </div>
    
  );
}

export default App;
