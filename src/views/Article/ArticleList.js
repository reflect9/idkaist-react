import _ from "lodash";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next';
import uuid from 'react-uuid';

import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

import "./ArticleList.scss";

const addArticle = (db, title, text) => {
    (async () => {
        try {
            const docRef = await addDoc(collection(db, "articles"), {
                title: title,
                text: text
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    })();
}
const removeArticle = (db, id) => {
    // TBD: Removing a specific article
    (async ()=> {
        try {
            await deleteDoc(doc(db, "articles", id));
            console.log("Article "+ id + " removed");
        } catch(e){
            console.error("Error Deleting article: ", e);
        }
    })();
    
}
const listArticles = (db, callback) => {
    // Fetching the list of articles using the filter
    (async () => {
        const querySnapshot = await getDocs(collection(db, "articles"));
        callback(querySnapshot);
    })();
}
const resetCollection = (db, collectionId) => {
    // TBD: Removing the entire collection
    listArticles(db, (articles)=>{
        articles.forEach((doc)=>{
            removeArticle(db,doc.id);
        });
    });
}



function ArticleList() {

    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // 화일업로드 (https://firebase.google.com/docs/storage/web/upload-files)
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBIRz1PMlAIuwHvRJpk-QeeteiQWHc3iGE",
        authDomain: "idkaist-9dc43.firebaseapp.com",
        projectId: "idkaist-9dc43",
        storageBucket: "idkaist-9dc43.appspot.com",
        messagingSenderId: "751680666470",
        appId: "1:751680666470:web:c82980030469c256d6a6a7"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    // USECASE. ADD ARTICLE
    // addArticle(db, "__TITLE__"+uuid(), "__TEXT__"+uuid());

    // USECASE. READ ARTICLE
    // listArticles(db, (articles)=>{
    //     // Callback for retrieved articles
    //     articles.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data().title} ${doc.data().text}`);
    //     });
    // });

    // USECASE. REMOVE ALL ARTICLES
    // resetCollection(db, "articles");


    return (
        <div>Fetching Articles</div>
    )
}
export default ArticleList;