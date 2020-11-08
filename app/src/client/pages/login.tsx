import React, { useState } from 'react'
import { login } from '../services/login'
import { Links } from '../components/links'
import { LoginInputs } from '../../types/LoginInputs'

const LoginPage = () => {

  const initialValues: LoginInputs = {
    username: '',
    password: '',
  }
  const [inputs, setInputs] = useState(initialValues)
  const [error, setError] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await login(inputs)
    if (res) setError(res)
  }

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  return <>
    <Links />
    {error ? <p>Error: {error}</p> : null}
    <form className='container mx-auto max-w-sm' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='text'>usename</label>
        <input type='text' id='text' name='username' onChange={handleInputChange} value={inputs.username} placeholder='username' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' onChange={handleInputChange} value={inputs.password} placeholder='********' />
      </div>
      <button type='submit'>Login</button>
    </form>
  </>
}

export default LoginPage
