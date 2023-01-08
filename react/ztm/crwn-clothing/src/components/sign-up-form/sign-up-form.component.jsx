{/* import { useEffect } from 'react' */}
{/* import { getRedirectResult } from 'firebase/auth' */}
import { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
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

  const [formFields, setFormFields] = useState(defaultFormFields)

  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match")
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('There is already a user with this email id.')
      } else console.log('error in user creation', error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name='displayName'
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name='password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Change Password"
          type="password"
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
      {/* <button type="button" onClick={signInWithGoogleRedirect}> */}
      {/*   Sign-in with Google Redirect */}
      {/* </button> */}
    </div>
  )
}

export default SignUpForm
