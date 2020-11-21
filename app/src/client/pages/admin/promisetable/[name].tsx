import React, { useState } from 'react'
import Nav from '../../../components/nav'
import { privateRoute } from '../../../components/privateRoute'

const PromiseTablePage = () => {

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">XXXさんの約束表</h3>
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">一括ダウンロード</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>挑戦</th>
                                                <th>自主トレーニング</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a>ダウンロード</a></td>
                                                <td><a>ダウンロード</a></td>
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
                                                <th>ユーザの更新日時</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr></tr>
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
    div.card {
        margin: 30px 0 0 0;
    }
      `}</style>
        </div>
        <style>{`body {background-color: #f8f9fc}`}</style>
    </>
}

export default PromiseTablePage
