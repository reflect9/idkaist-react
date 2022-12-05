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
import { ref, getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Timestamp } from "firebase/firestore";
import FetchArticle from "data/firestore/fetchArticle";
import UploadArticle from "data/firestore/uploadArticle";
import { v4 } from 'uuid';

import "./ArticleEditor.scss";


function ArticleEditor() {
    let { articleIDparam } = useParams();
    const [articleID, setArticleID] = useState(null);
    const [imageUpload, setImageUpload] = useState(null);
    const [progressPercent, setProgresspercent] = useState(null);
    const [uploadedImages, setUploadedImages] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    const [articleType, setArticleType] = useState("Award");
    const [articleCoverImage, setArticleCoverImage] = useState("");
    const [isFeatured, setIsFeatured] = useState(false);
    const [mdValue, setMdValue] = React.useState("**Hello world!!!**");
    const atypes = ["Award", "Event", "News", "Notice"];


    useEffect(()=>{
        if(typeof articleIDparam !== "undefined" && articleIDparam.length>0) {
            console.log("Fetching Article "+ articleIDparam);
            setArticleID(articleIDparam);
            FetchArticle(articleIDparam, (art)=>{
                // Setting the article properties
                setArticleTitle(art.title);
                setArticleType(art.type);
                setMdValue(art.text);
            });
        } else {
            setArticleID(v4());
            console.log("New Article: "+ articleID);
        }
    },[]);    
    
    const uploadImage = () => {
        if (imageUpload == null) return;
        const app = initializeApp(firebaseConfig);
        const storage = getStorage();
        const filePath = "images/" + imageUpload.name + v4();
        const imageRef = ref(storage, filePath);
        const uploadTask = uploadBytesResumable(imageRef, imageUpload);
        uploadTask.on("state_changed",
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot. totalBytes) * 100);
                setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                    setUploadedImages(downloadURL);
                });
            }
        )

        // uploadBytes(imageRef, imageUpload).then(() => {
        //     const uri = imageRef.getDownloadUrl();
        //     console.log(uri);
        //     setUploadedImages(uri);
        // });
    };
    const uploadMD = () => {
        const feedbackHolder = document.querySelector("#uploadMDFeedback");
        const callback = (msg)=>{
            feedbackHolder.innerHTML = msg;
        };
        const instantFeedback = UploadArticle(articleID, 
            {
            "title":articleTitle,
            "type":articleType,
            "coverImage":articleCoverImage,
            "text":mdValue,
            "featured":isFeatured,
            "datetime": Timestamp.now(),
            "isDeleted": false
        }, callback);
        callback(instantFeedback);
    }

    return (<div className="ArticleEditor">
        <div className="PageContentWrapper">
            <div className="markdownUI">
                <Link to="/articleListEditor">Back to Article List</Link> &nbsp;&nbsp;
                <Link to={"/article/"+articleIDparam}>Back to Article</Link>
                <label>Article Title</label>
                <input type="text" id="articleTitle" onChange={(e)=>{setArticleTitle(e.target.value);}} value={articleTitle}/>
                <label>Markdown Text</label>
                <div className="container">
                    <MDEditor
                        value={mdValue}
                        onChange={setMdValue}
                        height={500}
                    />
                    {/* <MDEditor.Markdown source={mdValue} style={{ whiteSpace: 'pre-wrap' }} /> */}
                </div>

                <label>Cover Image URI </label>
                <input type="text" id="coverImage" onChange={(e)=>{setArticleCoverImage(e.target.value);}}/>
                <div className="instruction">
                    Cover images are used to represent the article in a list. 
                    There's no size limit, but landscape images (i.e. width > height) will be the best.
                    Please upload the image using the UI below and copy-paste its URI, or you can use any web URI. 
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
                    <div id="uploadMDFeedback"></div>
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
                <span> {progressPercent} </span>
                <div className="uploadedImages">
                    {uploadedImages}
                </div>
            </div>

        </div>

    </div>)
}

export default ArticleEditor;
