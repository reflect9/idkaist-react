import _ from "lodash";
import React, { Component } from 'react';
import { useTranslation } from "react-i18next";
import AdmissionMasterInternational from "./AdmissionMasterInternational.js";
import AdmissionMasterKorean from "./AdmissionMasterKorean.js";
import Curriculum from "@data/Curriculum";
import "./Education.scss";


function Master() {
    // const Curriculum = require("/data/Curriculum.json");
    const { t, i18n, ready } = useTranslation();
    let curriculumTable = _.map(Curriculum.Master, (yearData, yearCode) => {
        let rows = _.map(yearData.semesters, (semesterData, semester)=>{
            let columns = _.map(semesterData, (courseData, courseIdx)=>{
                // Rendering courses
                return (
                    <div className="course description_hidden" key={courseIdx} onClick={(event)=>{event.target.classList.toggle("description_hidden");}}>
                        {courseData.code} {i18n.language=="en"?courseData.title_en:courseData.title_kr}
                        <span className='req'>
                          {(courseData.type=="Major Required")?"REQUIRED":""}
                        </span>
                        <div className="description">
                            {i18n.language=="en"?courseData.description_en:courseData.description_kr}
                        </div>
                    </div>
                );
            });
            // Rendering semesters
            return (
                <tr key={semester}>
                    <th>{t("General."+semester)}</th>
                    <td>
                        {columns}
                    </td>
                </tr>
            )
        });
        // Rendering Years
        return (
            <div key={yearCode}>
                <div className="year_title">
                    <em>{(i18n.language=="en") ? yearData.year_en : yearData.year_kr}. </em>
                    {(i18n.language=="en") ? yearData.year_role_en : yearData.year_role_kr+"과정"}
                </div>
                <div className="year_description">
                    {(i18n.language=="en") ? yearData.description_en : yearData.description_kr}
                </div>
                <table className="courses">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    });
    return (
        <div className="EducationContent">
            <div className="section_summary">
                {t("Education.Master.summary")}
            </div>
            <div className="section_content">
                <h2>Course Overview</h2>
                {curriculumTable}
                <div className="year_title"><em>{t("Education.Master.thesisRequirementTitle")}</em></div>
                <div className="year_description">
                    <p>{t("Education.Master.thesisRequirementContent")}</p>
                </div>
                {(i18n.language=="en")?<AdmissionMasterInternational/>:<AdmissionMasterKorean/>}
            </div>
        </div>
    );
}

export default Master;
