import { useState } from 'react'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

import FormInput from '../../components/form-input/form-input.component'
import Button from '../../components/button/button.component'

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Please Enter the correct password')
          break;
        case 'auth/user-not-found':
          alert('This user does not exist')
          break;
        default:
          console.log('error in signing in',error)
          break;
      }
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onClick={() => {}}>
        <FormInput 
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput 
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>
            Sign-in
          </Button>
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
            Sign-in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
