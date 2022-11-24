import _ from "lodash";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';

import MDEditor from '@uiw/react-md-editor';

import { initializeApp } from "firebase/app";
import firebaseConfig from "data/firestore/auth";
import { ref, getStorage, uploadBytes } from "firebase/storage";
import { Timestamp } from "firebase/firestore";
import UploadArticle from "data/firestore/uploadArticle";
import { v4 } from 'uuid';

import "./ArticleEditor.scss";


function ArticleEditor() {
    const [imageUpload, setImageUpload] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [articleTitle, setArticleTitle] = useState("");
    const [articleType, setArticleType] = useState("Award");
    const [isFeatured, setIsFeatured] = useState(false);
    const [mdValue, setMdValue] = React.useState("**Hello world!!!**");
    const atypes = ["Award", "Event", "News", "Notice"];

    const uploadImage = () => {
        if (imageUpload == null) return;
        const app = initializeApp(firebaseConfig);
        const storage = getStorage();
        const filePath = "images/" + imageUpload.name + v4();
        const imageRef = ref(storage, filePath);
        uploadBytes(imageRef, imageUpload).then(() => {
            setUploadedImages(filePath);
        });
    };
    const uploadMD = () => {
        UploadArticle({
            "title":articleTitle,
            "type":articleType,
            "text":mdValue,
            "featured":isFeatured,
            "datetime": Timestamp.now()
        });
    }

    return (<div className="ArticleEditor">
        <div className="PageContentWrapper">
            <div className="markdownUI">
                <label>Article Title</label>
                <input type="text" id="articleTitle" onChange={(e)=>{setArticleTitle(e.target.value);}} value={articleTitle}/>
                <label>Markdown Text</label>
                <div className="container">
                    <MDEditor
                        value={mdValue}
                        onChange={setMdValue}
                    />
                    {/* <MDEditor.Markdown source={mdValue} style={{ whiteSpace: 'pre-wrap' }} /> */}
                </div>

                <label>Article Type</label>
                <ul className="typeSelector">
                    {atypes.map((at,ati) => {
                        return (
                            <li key={ati}>
                                <input type="radio" id={at} name="articleType" 
                                    onChange={()=>{setArticleType(at);}}
                                    checked={(at==articleType)?true:false}></input>
                                <span>{at}</span>
                            </li>
                        )
                    })}
                </ul>
                
                <label>Is Featured?</label> 
                <input type="checkbox" onChange={()=>{setIsFeatured(!isFeatured);}}></input>


                <div className="saveButtonWrapper">
                    <button onClick={()=>{setMdValue("")}} >Reset</button>
                    <button onClick={uploadMD} >Save</button>
                </div>
            </div>
            <div className="imageUploadUI">
                <label>Image File Upload</label>
                <input
                    type="file"
                    onChange={(e) => {
                        setImageUpload(e.target.files[0]);
                    }}
                />
                <button onClick={uploadImage}>Upload Image</button>
            </div>

        </div>

    </div>)
}

export default ArticleEditor;
