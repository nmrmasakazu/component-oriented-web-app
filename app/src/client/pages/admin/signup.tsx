import React, { useState } from 'react'
import Nav from '../../components/nav'

const SignupPage = () => {

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <h3 className="text-dark mb-4">ユーザーの新規作成</h3>
                <h6 className="text-dark mb-4">ユーザネームは20文字まで</h6>
                <form id="form-round" method="post">
                    <h5 className="text-right"></h5>
                    <div className="form-group">
                        <input className="form-control" type="text" name="username" placeholder="ユーザーネーム" maxLength={20} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="パスワード" name="password" />
                        <div> ERROR </div>
                    </div>
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

export default SignupPage



// import React, { useState } from 'react'
// import Nav from '../../components/nav'

// const SignupPage = () => {

//     return <>
//         <div id="wrapper">
//             <Nav />
            
//         <div>
//     </div>

//     <style jsx>{`
//       `}</style>
//     </div>
//     <style>{`body {background-color: #f8f9fc}`}</style>
//     </>
// }

// export default SignupPage
