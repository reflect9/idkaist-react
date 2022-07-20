import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import "./Labs.scss";
import Labs from "@data/Labs";

function Lab({labID}){
    const { t, i18n, ready } = useTranslation();
    const LabData = Labs[labID];

    return <div className="Lab">
        <div className="LabBorder">
            <div className="title">
                <a href={LabData.lab_url} target="IDKAIST_LAB">
                    {LabData.lab_long}
                </a>
                <span className="short">
                    {LabData.lab} &nbsp;&nbsp;
                    <span className="prof_name">{i18n.language=="kr"?LabData.name_kr+" 교수":"Prof."+LabData.name_en} &nbsp;</span>
                    <a href={LabData.lab_url} target="IDKAIST_LAB">{LabData.lab_url}</a>&nbsp;&nbsp;
                    
                </span>
            </div>
            <div className="description">{i18n.language=="kr"?LabData.description_kr:LabData.description_en}</div>
            <div className="profAndProjects">
                <div className="profInfo">
                    <img src={"images/people/"+LabData.img_large}/>
                    <div className="profDescription">
                        {i18n.language=="kr"?LabData.name_kr:LabData.name_en}
                    </div>
                </div>
                <div className="projects">
                    <ul>
                        {/* <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li> */}
                    </ul>
                </div>

            </div>
        </div>
       
    </div>
}

export default Lab;