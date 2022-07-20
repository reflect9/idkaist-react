import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import _ from "lodash";
import "./LabList.scss";
import { CgArrowRight, CgArrowLeft } from "react-icons/cg";

import Labs from "@data/Labs";

function LabList({onChooseLab, currentLab}) {
    const { t } = useTranslation();
    const onClickLab = (lc) => {
        if (lc==currentLab) onChooseLab(undefined);
        else onChooseLab(lc);
    };
    const Labs_LI = _.map(Labs, (labData, labCode)=>{
        // console.log(labCode);
        const img = require("../../assets/labs/logo/"+labData.lab_logo);
        return <li onClick={()=>{onClickLab(labCode)}} className={(currentLab == labCode)? "active":""} key={labCode}>
            {/* <div className="title">{labData.lab}</div> */}
            <div className="thumbnail">
                <img src={img}/>
            </div>
        </li>
    });
    let listClass = "";
    if (typeof currentLab !== "undefined") {
        listClass = "small";
    }
    // setTimeout(()=>{
    //     let selectedLI = document.querySelector(".LabList li.active");
    //     if (selectedLI) {
    //         console.log(selectedLI);
    //         selectedLI.parentNode.scrollLeft = selectedLI.offsetLeft - 50;
    //     }
    // },1000);
    return <div className={"LabList " + listClass}>
        <div className="scrollX"> <CgArrowLeft/> {t("Research.LabList.scrollMessage")} <CgArrowRight/> </div>
        <ul>    
            {Labs_LI}
        </ul>
    </div>
}

export default LabList;