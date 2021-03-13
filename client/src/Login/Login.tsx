import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import styles from './Login.module.scss'

interface Props {}

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState<string> ("");
  const [password, setPassword] = useState<string> ("");

  const login = () => {
    console.log('Login!');
  }

  return (
    <div className={styles.root}>
      <LoginForm
        email={email}
        password={password}
        handleEmail={e => setEmail(e.target.value)}
        handlePassword={e => setPassword(e.target.value)}
        handleLogin={() => login()}
      />
      <a href="/register" className={styles.link}>Register Now!</a>
    </div>
  )
}

export default Login