import React, { useState } from 'react'
import Nav from '../../components/nav'
import { privateAdminRoute } from '../../components/privateRoute'

const UserTablePage = () => {

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">登録済みのユーザー</h3>
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">登録済みのユーザーを表示中</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>ユーザーネーム</th>
                                                <th>自主トレ項目</th>
                                                <th>挑戦項目</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>

                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr></tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div>
    </div>

    <style jsx>{`
      h3 {
        margin: 20px;
      }
      `}</style>
    </div>
    <style>{`body {background-color: #f8f9fc}`}</style>
    </>
}

export default privateAdminRoute(UserTablePage)
