import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import _ from "lodash";
import "./LabList.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import Labs from "@data/Labs";

function LabList({ onChooseLab, currentLab }) {
    const { t } = useTranslation();
    const listBox = useRef(null);
    const onClickLab = (lc) => {
        if (lc == currentLab) onChooseLab(undefined);
        else onChooseLab(lc);
    };
    const Labs_LI = _.map(Labs, (labData, labCode) => {
        // console.log(labCode);
        const img = require("../../assets/labs/logo/" + labData.lab_logo);
        return <li onClick={() => { onClickLab(labCode) }} className={(currentLab == labCode) ? "active" : ""} key={labCode}>
            {/* <div className="title">{labData.lab}</div> */}
            <div className="thumbnail">
                <img src={img} />
            </div>
        </li>
    });
    let listClass = "";
    if (typeof currentLab !== "undefined") {
        listClass = "small";
    }
    
    return <div className={"LabList " + listClass}>
        {/* <div className="scrollX"> <CgArrowLeft/> {t("Research.LabList.scrollMessage")} <CgArrowRight/> </div> */}
        <div className="leftArrow" onClick={()=>{listBox.current.scrollLeft -= 500;}}> <MdArrowBackIos /> </div>
        <ul ref={listBox}>
            {Labs_LI}
        </ul>
        <div className="rightArrow" onClick={()=>{listBox.current.scrollLeft += 500;}}> <MdArrowForwardIos /> </div>
    </div>
}

export default LabList;