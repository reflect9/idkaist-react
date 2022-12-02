import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, deleteDoc, where } from "firebase/firestore";
import firebaseConfig from "data/firestore/auth";


function UploadArticle(articleID, articleData) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    const docRef = doc(db, "articles", articleID); // Creating reference to the new/existing document
    // READ SINGLE ARTICLE
    (async () => {
        setDoc(docRef, articleData);
    })();
    return (
        <div>Uploading Article</div>
    )
}
export default UploadArticle;