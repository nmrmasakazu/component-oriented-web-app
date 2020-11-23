import React from 'react'
import Cookie from 'js-cookie'
import Router from 'next/router'
import { COOKIES } from '../services/auth/login'

const Nav = () => {
    const logout = async () => {
        Cookie.remove(COOKIES.authToken)
        alert("logout")
        await Router.push("/login")
    }

    return (
        <nav>
            <div className="container-fluid">
                <h5>
                    <a className="text-white" href="/admin/">テレリハ治療支援システム</a>
                </h5>
                <button className="btn" type="button"><a href="/admin/">トップページ</a></button>
                {/* <br /> */}
                {/* <button className="btn" type="button">戻る</button> */}
                <div className="new-user">
                    <h6>-ユーザ新規作成</h6>
                    <button className="btn" type="button"><a href="/admin/signup">新規作成</a></button>
                </div>
                <div className="common">
                    <h6>-共通項目の編集</h6>
                    <button className="btn" type="button"><a href="/admin/itemtr">自主トレ項目</a></button>
                    <button className="btn" type="button"><a href="/admin/itemch">挑戦項目</a></button>
                </div>
                <button className="btn" type="button" onClick={logout}>ログアウト</button>
            </div>

            <style>{`
        nav {
            height: 1000px;
            width: 200px;
        }
        h5 {
            margin: 20px 0;
            color: rgb(255,255,255);
        }
        h6 {
            color: rgb(255,255,255);
        }
        button {
            background-color: rgb(255,255,255) !important;
            color: rgb(0, 157, 158) !important;
            margin: 0 0 10px 0;
        }
        a {
            color: rgb(0, 157, 158) !important;
        }
        div.new-user {
            height: 70px;
            width: 150px;
            margin: 20px 0;
        }
        div.common {
            height: 150px;
            width: 150px;
        }
    `}</style>
    <style>{`nav {background-color: rgb(0, 157, 158)} !important;`}</style>
    </nav>
    )
}

export default Nav
