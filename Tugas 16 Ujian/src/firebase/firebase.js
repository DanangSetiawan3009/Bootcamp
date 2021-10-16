import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth"


const configFirebase = {
    apiKey: "AIzaSyCm3YTYkVM9F3c3DkJ3WF8nVJR7GFsq6dk",
    authDomain: "project-july21.firebaseapp.com",
    projectId: "project-july21",
    storageBucket: "project-july21.appspot.com",
}

class Firebase {
    constructor() {
        initializeApp(configFirebase)

        this.auth = getAuth()
    }

    createUser = obj => {
        return createUserWithEmailAndPassword(this.auth, obj.email, obj.password)
    }

    loginUser = user => {
        return signInWithEmailAndPassword(this.auth, user.email, user.password)
    }
}

export default Firebase