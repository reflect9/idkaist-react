import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, where } from "firebase/firestore";
import firebaseConfig from "data/firestore/auth";

function RetrieveArticles(articleType, callback) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    // READ ARTICLES MATCHING WITH articleType
    (async () => {
        const articlesRef = collection(db, "articles");
        let querySnapshot;
        querySnapshot = await getDocs(articlesRef);
        // console.log(articleType);
        if(articleType=="" || articleType=="All" || typeof articleType === "undefined") callback(querySnapshot.docs);
        else {
            let filteredSnapshot = querySnapshot.docs.filter(d=>{
                // console.log(d.data().type + " ?= "+ articleType.toLowerCase());
                return d.data().type==articleType.toLowerCase();
            }); 
            callback(filteredSnapshot);
        }
    })();
    return (
        <div>Retrieving Articles</div>
    )
}
export default RetrieveArticles;
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries