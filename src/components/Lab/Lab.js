import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import "./Labs.scss";
import Labs from "@data/Labs";

function Lab({ labID }) {
    const { t, i18n, ready } = useTranslation();
    const [imageNum, setImageNum] = useState();
    const LabData = Labs[labID];
    const getRandomNumber = () => {
        return (Math.floor(Math.random() * 10));
    }
    let projectImages, projectImagesEl;
    if (LabData.lab_works) {
        projectImages = LabData.lab_works;
    } else {
        projectImages = [
            "https://source.unsplash.com/random/600x600?sig=" + getRandomNumber(),
            "https://source.unsplash.com/random/600x600?sig=" + getRandomNumber(),
            "https://source.unsplash.com/random/600x600?sig=" + getRandomNumber()
        ];
    }
    
    projectImagesEl = projectImages.map((pi,pii)=>{
        return (<img className="projectImage" key={pii} onClick={()=>{setImageNum(pii);}} src={pi}/>);
    });
    
    let labKeywords;
    if (typeof LabData.lab_keywords !== "undefined") {
        labKeywords = LabData.lab_keywords.map((k) => {
            return (<li key={k}>{k}</li>);
        });
    }

    return <div className="Lab">
        <div className="LabInfo">
            <div className="leftPanel">
                <div className="LabTitle">
                    {LabData.lab_long}
                </div>
                <div className="LabTitleShort">{LabData.lab}</div>
                <div className="description">{i18n.language == "kr" ? LabData.description_kr : LabData.description_en}</div>
            </div>

            <div className="rightPanel">
                <h4>Principal Investigator</h4>
                <div className="LabPI">
                    {i18n.language == "kr" ? "지도교수: " + LabData.name_kr : LabData.name_en}
                </div>
                <h4>Research Areas</h4>
                <div className="LabKeywords">
                    <ul>
                        {labKeywords}
                    </ul>
                </div>

                <h4>HOMEPAGE</h4>
                <div className="LabLink">
                    <a href={LabData.lab_url} target="IDKAIST_LAB">{LabData.lab_url}</a>&nbsp;&nbsp;
                </div>
            </div>

        </div>
        <div className="projects">
            {projectImagesEl}
        </div>
        {(typeof imageNum !=="undefined") && (imageNum!=null) ? (
            <div className="imagePopup">
                {<img src={projectImages[imageNum]} onClick={()=>{setImageNum(null);}}/>}
            </div>
        ):<div/>}
        
    </div>
}

export default Lab;