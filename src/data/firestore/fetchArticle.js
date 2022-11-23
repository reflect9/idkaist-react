import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, where } from "firebase/firestore";
import firebaseConfig from "data/firestore/auth";

function FetchArticle(docID, callback) {
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
    const docRef = doc(db, "articles", docID);
    // READ SINGLE ARTICLE
    (async () => {
        getDoc(docRef)
        .then((snapshot)=>{
            // console.log(snapshot.data().text);
            callback(snapshot.data());
        });
    })();


    return (
        <div>Fetching Article</div>
    )
}
export default FetchArticle;