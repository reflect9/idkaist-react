import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, deleteDoc, where } from "firebase/firestore";
import firebaseConfig from "data/firestore/auth";
import { v4 } from 'uuid';

function UploadArticle(articleData) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    const articleID = v4();
    const docRef = doc(db, "articles", articleID); // Creating reference to the new document
    // READ SINGLE ARTICLE
    (async () => {
        setDoc(docRef, articleData);
    })();
    return (
        <div>Uploading Article</div>
    )
}
export default UploadArticle;