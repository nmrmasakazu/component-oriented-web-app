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
    {/* <div class="contact-clean" style="background-color: rgb(0, 157, 158);opacity: 1;">
        <form id="form-round" method="post" th:action="@{/signin}"><img class="float-right d-md-flex align-items-md-start img-right" th:src="@{~/img/Nitech-logo.png}" style="height: 50px;padding: 5px 0 0 0;" width="auto" height="50px">
            <div style="height: 100px;padding: 0 0 20px 0;margin: 0 0 10px 0;"><img class="float-right d-md-flex img-right" th:src="@{~/img/Kaikokai-logo.png}" style="height: 50px;padding: 0 0 5px;margin: 5px 0 0 0;" width="auto" height="50px"></div>
            <h2 class="text-center" style="margin: 0px;">テレリハビリ治療支援システム</h2>
            <h5 class="text-right" style="margin: 0 0 20px;"></h5>
            <div class="form-group"><input class="form-control" type="text" name="username" placeholder="ユーザーネーム"></div>
            <div class="form-group"><input class="form-control" type="password" placeholder="パスワード" name="password">
                <div th:if="${param.error}"><small class="form-text text-danger">パスワードが正しくありません</small></div>
            </div>
            <div class="form-group" id="center"><button class="btn" style="margin: 0;width: 150px;background-color: rgb(0, 157, 158);color: rgb(255,255,255);">ログイン</button></div>
        </form>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script> */}



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
    
    <style jsx>{`
    p {
      color: red;
    }
    `}</style>
  </>
}

export default LoginPage
