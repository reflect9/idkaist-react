import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import formatDate from '@utils/FormatDate';
import { BiSearch } from "react-icons/bi";

// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

import RetrieveArticles from "data/firestore/retrieveArticles";
import "./ArticleList.scss";

const ArticleList = () => {
    const { articleType } = useParams();
    const { t, i18n, ready } = useTranslation();
    const [articles, setArticles] = useState([]);
    const atypes = ["All", "Award", "Event", "News", "Notice","Banner"];
    // RetrieveArticles(articleType, setArticles);
    // Fetching articles only once (when the component got loaded)
    useEffect(() => {
        let allowedArticleTypes = (articleType=="All")?["Award","Event","News","Notice","Banner"]:[articleType]; 
        RetrieveArticles(allowedArticleTypes, null, 500, setArticles);
        console.log(articles);
    },[articleType]);

    const typeLinks = atypes.map( (at) => {
        return (<Link className={articleType == at ? "active" : ""} 
            to={'/articleList/'+at}>
            <li >{t("ArticleList.Type."+at)}</li></Link>);
    });                 
    return (
        <div className="ArticleList">
            <div className="PageContentWrapper">
                <div className="filterUI">
                    <ul>
                        {typeLinks}
                    </ul>
                </div>
                <div className="articleContainer">
                    <div className="topbar">
                        <h2>All Articles</h2>
                        <div className="searchUI">
                            <input type="text" className="input" placeholder="Search" disabled/>
                            <button type="submit">
                                <BiSearch />
                            </button>
                        </div>
                    </div>

                    <ul>
                        {(articles.length>0) ? articles
                        .filter(art=>{return art.data().isVisible})
                        .map((art) => {
                            // console.log(art.data());
                            return (<li key={art.id}>
                                <div className="type">{art.data().type}</div>
                                <Link to={'/article/'+art.id}>
                                    <div className="title">
                                        {art.data().title} 
                                        {art.data().featured ? (<span className="featured_mark">FEATURED</span>):""}
                                    </div>    
                                </Link>
                                <div className="datetime">{formatDate(art.data().datetime)}</div>
                            </li>);
                        }) : <div>{t("ArticleList.NoArticleMsg")}</div>}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ArticleList;

/// 기본 기능을 제공하는 메쏘드들
// const addArticle = (db, title, text) => {
//     (async () => {
//         try {
//             const docRef = await addDoc(collection(db, "articles"), {
//                 title: title,
//                 text: text
//             });
//             console.log("Document written with ID: ", docRef.id);
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }
//     })();
// }
// const removeArticle = (db, id) => {
//     // TBD: Removing a specific article
//     (async ()=> {
//         try {
//             await deleteDoc(doc(db, "articles", id));
//             console.log("Article "+ id + " removed");
//         } catch(e){
//             console.error("Error Deleting article: ", e);
//         }
//     })();

// }
// const listArticles = (db, callback) => {
//     // Fetching the list of articles using the filter
//     (async () => {
//         const querySnapshot = await getDocs(collection(db, "articles"));
//         callback(querySnapshot);
//     })();
// }
// const resetCollection = (db, collectionId) => {
//     // TBD: Removing the entire collection
//     listArticles(db, (articles)=>{
//         articles.forEach((doc)=>{
//             removeArticle(db,doc.id);
//         });
//     });
// }


    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // 화일업로드 (https://firebase.google.com/docs/storage/web/upload-files)
    // Your web app's Firebase configuration


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
