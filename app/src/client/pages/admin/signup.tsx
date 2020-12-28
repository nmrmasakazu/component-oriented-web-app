import React, { useState } from 'react'
import Nav from '../../components/nav'
import { privateAdminRoute } from '../../components/privateRoute'
import { User } from '../../../types/User'
import { signup } from '../../services/auth/signup'
import { ResponseResult } from '../../../types/ResponseResult'

const SignupPage = () => {

    const initialValues: User = {
        username: '',
        password: '',
        email: '',
        roles: ['ROLE_CLIENT']
    }
    const [inputs, setInputs] = useState(initialValues)
    const [error, setError] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setError('')
        const responseResult: ResponseResult = await signup(inputs)
        if (responseResult.success) {
            alert(`【登録完了】 ユーザ名: ${inputs.username}`)
            setInputs(initialValues)
        } else {
            setError(responseResult.message)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        e.persist()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
            email: inputs.username + '@email.com' // TODO: EMAILは不要
        })
    }

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <h3 className="text-dark mb-4">ユーザーの新規作成</h3>
                    <h6 className="text-dark mb-4">ユーザネームは20文字まで</h6>
                    <form id="form-round" onSubmit={handleSubmit}>
                        <h5 className="text-right"></h5>
                        <div className="form-group">
                            <input className="form-control" type="text" name="username" placeholder="ユーザーネーム" maxLength={20} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" placeholder="パスワード" name="password" onChange={handleInputChange} />
                        </div>
                        {error ? <p className="err">Error: {error}</p> : null}
                        <div className="form-group" id="center-1">
                            <button className="btn">新規作成</button></div>
                    </form>
                </div>
                <footer className="bg-white sticky-footer"></footer>
            </div>


            <div>
            </div>

            <style jsx>{`
    h3 {
        margin: 20px;        
    }
    h5 {
        margin: 0 0 20px;
    }
    h6 {
        margin: 20px;        
    }
    p.err {
        color: red;
    }
    form {
        width: 500px;
        margin: 20px;
    }
    button {
        margin: 0;
        width: 150px;
        background-color: rgb(0, 157, 158) !important;
        color: rgb(255,255,255) !important;
    }
      `}</style>
        </div>
        <style>{`body {background-color: #f8f9fc}`}</style>
    </>
}

export default privateAdminRoute(SignupPage)
