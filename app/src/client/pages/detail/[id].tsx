import React, { useState } from 'react'
import Nav from '../../components/nav'

const Detail = () => {

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">麻痺手を使用する約束表</h3>
                        <h4 className="text-dark mb-4">X日目の約束表</h4>
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">挑戦する活動</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>内容</th>
                                                <th>ユーザーの自己評価</th>
                                                <th>ユーザーのコメント</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                            </tr>
                                            <tr>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                            </tr>
                                            <tr>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                            </tr>
                                            <tr>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>療法士からのコメント</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>未記入</td>
                                            </tr>
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
                                <p className="text-primary m-0 font-weight-bold">自主トレーニング</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>内容</th>
                                                <th>ユーザーの自己評価</th>
                                                <th>ユーザーのコメント</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                            </tr>
                                            <tr>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                            </tr>
                                            <tr>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                                <td>未記入</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>合計時間</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>未記入</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="table-responsive table mt-2" id="dataTable-2" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>療法士からのコメント</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>未記入</td>
                                            </tr>
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
                                <p className="text-primary m-0 font-weight-bold">FMA</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>点数</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>未記入</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="table-responsive table mt-2" id="dataTable-2" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>ビデオのファイル名</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>未記入</td>
                                            </tr>
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
                                <p className="text-primary m-0 font-weight-bold">iWakkaによる評価</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>種類</th>
                                                <th>グラフ</th>
                                                <th>横方向の目線の動き</th>
                                                <th>縦方向の目線の動き</th>
                                                <th>エクスポート</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>未記入</td>
                                                <td>
                                                    <div className="graph"><canvas></canvas></div>
                                                </td>
                                                <td>
                                                    <div className="graph"><canvas></canvas></div>
                                                </td>
                                                <td>
                                                    <div className="graph"><canvas></canvas></div>
                                                </td>
                                                <td><a>エクスポート</a></td>
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
                <footer className="bg-white sticky-footer"></footer>
            </div>





            <div>
            </div>

            <style jsx>{`
        h3 {
            margin: 20px;
        }
        h4 {
            margin: 0 0 0 20px;
        }
        h5 {
            background-color: #ffe500;
            color: rgb(0,0,0);
            margin: 20px 0 10px 0;
        }
        h6 {
            margin: 20px;
        }
        textarea {
            height: 150px;
        }
        button {
            margin: 0 0 0 20px;
            width: 300px;
            background-color: rgb(0, 157, 158) !important;
            color: rgb(255,255,255) !important;
        }
        div.graph {
            width: 400px;
        }
      `}</style>
        </div>
        <style>{`body {background-color: #f8f9fc}`}</style>
    </>
}

export default Detail
