import _ from "lodash";
import React, { Component } from 'react';
import { useTranslation, Trans } from "react-i18next";
import Curriculum from "@data/Curriculum";
import "./Education.scss";


function Undergraduate() {
    // const Curriculum = require("./Curriculum.json");
    const { t, i18n, ready } = useTranslation();
    let curriculumTable = _.map(Curriculum.Undergraduate, (yearData, yearCode) => {
        let rows = _.map(yearData.semesters, (semesterData, semester)=>{
            let columns = _.map(semesterData, (courseData, courseIdx)=>{
                // Rendering courses
                return (
                    <div className="course description_hidden" key={courseIdx} onClick={(event)=>{event.target.classList.toggle("description_hidden");}}>
                        {courseData.code} {i18n.language=="en"?courseData.title_en:courseData.title_kr}
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
                {t("Education.Undergraduate.summary")}
            </div>
            <div className="section_content">
                <h2>Course Overview</h2>
                {curriculumTable}
                <div className="year_title"><em>{t("Education.Undergraduate.graduationResearch")}</em></div>
                <div className="year_description">
                    <div>{t("Education.Undergraduate.graduationResearchDescription")}</div>
                    <label>URP-B</label>
                    <div>{t("Education.Undergraduate.URP-B")}</div>
                </div>
                <div className="year_title"><em>{t("Education.Undergraduate.graduationRequirements")}</em></div>
                <div className="year_description">
                    <div><a href="https://docs.google.com/spreadsheet/ccc?key=0Au6I5L9NWkyBdEo3d1RaNVVBbW01NkZRMkwtdjZuNWc&amp;usp=sharing" target="_blank">{t("Education.Undergraduate.graduationRequirements")}</a></div>
                    <div><a href="https://docs.google.com/spreadsheet/ccc?key=0Au6I5L9NWkyBdEo3d1RaNVVBbW01NkZRMkwtdjZuNWc&amp;usp=sharing" target="_blank">{t("Education.Undergraduate.graduationRequirementsReadThis")}</a></div>
                </div>
            </div>
            <div className="section_content">
                <h2>Adimission</h2>
                <div className="year_description">
                    <Trans i18nKey="Education.Undergraduate.Admission">
                        Text<a href="http://admission.kaist.ac.kr/undergraduate/" target="_blank">link</a>
                    </Trans>
                </div>
            </div>
        </div>
    );
}

export default Undergraduate;
