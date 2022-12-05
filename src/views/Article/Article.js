import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import formatDate from '@utils/FormatDate';

import FetchArticle from "data/firestore/fetchArticle";
import "./Article.scss";

function Article() {
    const { articleID } = useParams();
    const [ art, setArticle ] = useState();
    const { t } = useTranslation();
    const atypes = ["All", "Award", "Event", "News", "Notice"];

    useEffect(()=>{
        FetchArticle(articleID, setArticle);
    },[articleID]);    

    if (art) {
        return (
            <div className="Article">
                <div className="PageContentWrapper">
                    <div className="filterUI">
                        <ul>
                            {atypes.map((at)=>{
                                return (<Link className={(art && art.type === at.toLowerCase()) ? "active" : ""} 
                                    to={(at==="All")?'/articleList':'/articleList/'+at}
                                    key={at}>
                                    <li>{t("ArticleList.Type."+at)}</li></Link>);
                            })}
                        </ul>
                    </div>
                    <div className="articleContainer">
                        <div className="datetime">{formatDate(art.datetime)}</div>
                        <div className="title">{art.title}</div>
                        <div className="content">
                            <ReactMarkdown>
                                {art.text}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else  return <div>No Article </div>
    
}

export default Article;
