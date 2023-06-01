import './App.css'
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import {auth} from "./config"
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  // const [count, setCount] = useState(0)
  const provider = new GoogleAuthProvider();
  
  const GoogleSignIn = () => {
    try {
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        if (user && auth){
          return navigate("/dashboard")
        }
        console.log(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <>
      <button onClick={GoogleSignIn}>Google SignIn</button>
    </>
  )
}

export default App
