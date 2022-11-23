import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, where } from "firebase/firestore";
import firebaseConfig from "data/firestore/auth";


// const RetrieveArticles = (callback) => {
//     const querySnapshot = await getDocs(collection(db, "articles"));
//     querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
// });
// }

const listArticles = (db, articleType, callback) => {
    // Fetching the list of articles using the filter
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
}

function RetrieveArticles(articleType, callback) {

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
    listArticles(db, articleType, callback);

    // USECASE. REMOVE ALL ARTICLES
    // resetCollection(db, "articles");


    return (
        <div>Retrieving Articles</div>
    )
}
export default RetrieveArticles;