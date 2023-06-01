import { useEffect } from "react";
import { auth } from "../config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Dashboard(){

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
                
                
    //         } else {

    //         }
    //     })
    // }, []);
    const user = auth.currentUser;

    return (
        <div>
            <h1>{user.displayName}</h1>
            <img src={user.photoURL} alt="" />
        </div>
    )

    
}