{/* import { useEffect } from 'react' */}
{/* import { getRedirectResult } from 'firebase/auth' */}
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  {/* useEffect(() => { */}
  {/*   const logGoogleRedirectUser = async () => { */}
  {/*     const response = await getRedirectResult(auth) */}
  {/*     if (response) { */}
  {/*       const userDocRef = await createUserDocumentFromAuth(response.user); */}
  {/*       console.log(userDocRef) */}
  {/*     } */}
  {/*   } */}
  {/*   logGoogleRedirectUser() */}
  {/* }, []) */}
  const logGooglePopupUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  }

  return (
    <div>
      <h1>SignIn</h1>
      <button type="button" onClick={logGooglePopupUser}>
        Sign-in with Google Popup
      </button>
      {/* <button type="button" onClick={signInWithGoogleRedirect}> */}
      {/*   Sign-in with Google Redirect */}
      {/* </button> */}
    </div>
  )
}

export default SignIn
