import _ from "lodash";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next';

import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';

import Articles from '@data/Articles';
import "./Article.scss";


/*
노션으로 DB access하기 tutorials
https://developers.notion.com/docs
https://github.com/makenotion/notion-sdk-js
*/

function Article() {
    const { articleID } = useParams();
    const [ md, setMd ] = useState();
    const { t } = useTranslation();

    let article = Articles[articleID];

    import("../../data/markdown/"+article.description)
    .then(res => {
        fetch(res.default)
            .then(res => res.text())
            .then(res => {
                setMd(res);
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
    
    return (
        <div className="Article">
            <Menu />
            <PageHeader />
            <div className="PageContentWrapper">
                <div className="image">
                    {article.YouTube_URL ? 
                        <iframe width="560" height="315" src={article.YouTube_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        : <br/>}
                </div>
                <div className="title">
                    {article.title}
                </div>
                <div className="metadata">
                    {article.lab}
                </div>
                <div className="description">
                    <ReactMarkdown>
                        {md}
                    </ReactMarkdown>

                </div>
            </div>
        </div>
    );
}

export default Article;
