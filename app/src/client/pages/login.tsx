import React, { useState } from 'react'
import { login } from '../services/auth/login'
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
    const message = await login(inputs)
    if ( message ) { setError(message) }
  }

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  return <>
    <div className="contact-clean">
      <form id="form-round" onSubmit={handleSubmit}>
        <img className="float-right d-md-flex align-items-md-start img-right" src="/static/img/Nitech-logo.png" />
        <div className="kaikokai">
          <img className="float-right d-md-flex img-right" src="/static/img/Kaikokai-logo.png" />
        </div>
        <h2 className="text-center">テレリハビリ治療支援システム</h2>
        <h5 className="text-right"></h5>
        {error ? <p className="err">Error: {error}</p> : null}
        <div className="form-group">
            <input className="form-control" type="text" name="username" placeholder="ユーザーネーム" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input className="form-control" type="password" placeholder="パスワード" name="password" onChange={handleInputChange} />
        </div>
        <div className="form-group" id="center">
            <button className="btn">ログイン</button>
        </div>
      </form>

      <style jsx>{`
        div.contact-clean {
        background-color: rgb(0, 157, 158);
        opacity: 1;
        }
        h2 {
          margin: 0px;
        }
        h5 {
          margin: 0 0 20px;
        }
        p.err {
          color: red;
        }
        button {
          background-color: rgb(0, 157, 158) !important;
          color: rgb(255, 255, 255);
          margin: 0;
          width: 150px;
        }
        img {
          height: 50px;
          padding: 5px 0 0 0;
          width: "auto";
          height: "50px"; 
        }
        .kaikokai {
          height: 100px;
          padding: 0 0 20px 0;
          margin: 0 0 10px 0;
        }
      `}</style>
    </div>
    <style>{`body {background-color: rgb(0, 157, 158)}`}</style>
  </>
}

export default LoginPage
