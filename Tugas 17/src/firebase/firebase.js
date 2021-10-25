import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const configFirebase = {
    apiKey: "AIzaSyCm3YTYkVM9F3c3DkJ3WF8nVJR7GFsq6dk",
    authDomain: "project-july21.firebaseapp.com",
    projectId: "project-july21",
    storageBucket: "project-july21.appspot.com",
}

class Firebase {
    constructor() {
        this.app = initializeApp(configFirebase)

        this.data = getFirestore(this.app)
    }

    
}

export default Firebase