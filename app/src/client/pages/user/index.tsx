import React, { useState } from 'react'
import Nav from '../../components/nav'

const UserPage = () => {

    return <>
        <div id="wrapper">
            <Nav />

            <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div className="container-fluid">
                    <h3 className="text-dark mb-4">約束表</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">約束表</p>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>日目</th>
                                            <th>詳細の表示</th>
                                            <th>コメント等の編集</th>
                                            <th>あなたの更新日時</th>
                                            <th>医療従事者の更新日時</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td><a>表示</a></td>
                                            <td><a>編集</a></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr></tr>
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
            <footer className="bg-white sticky-footer"></footer>
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

export default UserPage
