import React, { createContext, useContext, useEffect, useState } from 'react'
import fire from '../fire'

export const authContext = createContext()
export const useAuth = () => {
  return useContext(authContext)

}

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState('')

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }
  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleSignUp = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message)
            break
          case 'auth/weak-password':
            setPasswordError(err.message)
        }
      })
    console.log(email);
  }

  const handleLogIn = () => {
    clearErrors()
    fire.auth().signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case 'auth/user-disabled':
        case 'auht/invalid-email':
        case 'auth/user-not-found':
          setEmailError(err.message)
          break;
        case 'auth/wrong-password':
          setPasswordError(err.message);
          break;
      }
    })
    setUser(email)
  }

  const handleLogOut = () => {
    fire.auth().signOut()
    setUser('')
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener();
  }, [])

  const values = {
    email, password, user,
    emailError, passwordError, hasAccount,
    setEmail, setPassword, setHasAccount,
    handleSignUp, handleLogIn, handleLogOut,
  }
  return (
    <authContext.Provider value={values}>{children}</authContext.Provider>
  )
}

export default AuthContextProvider