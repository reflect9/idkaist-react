import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import "./Labs.scss";
import Labs from "@data/Labs";

function Lab({ labID }) {
    const { t, i18n, ready } = useTranslation();
    const [imageNum, setImageNum] = useState(0);
    const LabData = Labs[labID];
    const getRandomNumber = ()=>{
        return (Math.floor(Math.random()*10));
    }
    const projectImages = [
        (<img src={"https://source.unsplash.com/random/600x600?sig=" + getRandomNumber()} />),
        (<img src={"https://source.unsplash.com/random/600x600?sig=" + getRandomNumber()} />),
        (<img src={"https://source.unsplash.com/random/600x600?sig=" + getRandomNumber()} />)
    ];
    let labKeywords;
    if (typeof LabData.lab_keywords !== "undefined") {
        labKeywords = LabData.lab_keywords.map((k)=>{
            return (<li>{k}</li>);
        });
    }

    return <div className="Lab">
        <div className="LabInfo">
            <div className="topBar"></div>
            <div className="LabTitle">
                {LabData.lab_long}
            </div>
            <div className="LabTitleShort">{LabData.lab}</div>
            <div className="LabPI">
                {i18n.language == "kr" ? "지도교수: "+LabData.name_kr : "Principal Investigator: "+LabData.name_en}
            </div>
            
            <div className="description">{i18n.language == "kr" ? LabData.description_kr : LabData.description_en}</div>

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
        <div className="projects">
            <div className="imageSelector">
                {projectImages.map((img, imgIndex)=> (
                    <div className={imageNum==imgIndex ? "selectorButtonWrapper active" : "selectorButtonWrapper"}>
                        <div onClick={()=>{setImageNum(imgIndex)}} className="selectorButton"/>
                    </div>
                ))}
            </div>
            {projectImages[0]}
            <div className="imageDescription">
                Lorem Ipsum
            </div>
            {/* <div className="profDescription">
                {i18n.language == "kr" ? LabData.name_kr : LabData.name_en}
            </div> */}
        </div>

    </div>
}

export default Lab;