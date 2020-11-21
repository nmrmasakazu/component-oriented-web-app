import React, { useState } from 'react'
import Nav from '../../../components/nav'
import { privateAdminRoute } from '../../../components/privateRoute'

const EditPromisePage = () => {

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">約束表の編集</h3>
                        <h6 className="text-danger mb-4">ERROR</h6>
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">約束表の編集</p>
                            </div>
                            <div className="card-body">
                                <form method="post">
                                    <input className="form-control" type="hidden" />
                                    <h5>前日の挑戦項目</h5>
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
                                                <tr></tr>
                                            </tbody>
                                            <tfoot>
                                                <tr></tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="form-group">
                                        <h5>挑戦項目に対するコメント</h5>
                                        <textarea className="form-control" name="comment_ch" maxLength={500} ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <h5>本日の挑戦項目の入力</h5>
                                        <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                            <table className="table dataTable my-0" id="dataTable">
                                                <thead>
                                                    <tr>
                                                        <th>内容</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch">
                                                                <optgroup label="挑戦項目">
                                                                    <option value="" selected={true}>未選択</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch">
                                                                <optgroup label="挑戦項目">
                                                                    <option value="" selected={true}>未選択</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>                                                </tr>
                                                    <tr>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch">
                                                                <optgroup label="挑戦項目">
                                                                    <option value="" selected={true}>未選択</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch">
                                                                <optgroup label="挑戦項目">
                                                                    <option value="" selected={true}>未選択</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr></tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <h5>前日の自主トレ項目</h5>
                                    <div className="table-responsive table mt-2" id="dataTable-2" role="grid" aria-describedby="dataTable_info">
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
                                                <tr></tr>
                                            </tbody>
                                            <tfoot>
                                                <tr></tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="form-group">
                                        <h5>自主トレ項目に対するコメント</h5>
                                        <textarea className="form-control" maxLength={500}></textarea>
                                        <div
                                            className="form-group">
                                            <h5>本日の自主トレ項目の入力</h5>
                                            <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                                <table className="table dataTable my-0" id="dataTable">
                                                    <thead>
                                                        <tr>
                                                            <th>内容</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                        </tr>
                                                        <tr></tr>
                                                        <tr></tr>
                                                        <tr></tr>
                                                        <tr></tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr></tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <h5>FMAの結果（あれば点数とビデオのファイル名を入力してください）</h5>
                                            <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                                <table className="table dataTable my-0" id="dataTable">
                                                    <thead>
                                                        <tr>
                                                            <th>FMAの点数</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><input className="form-control" type="text" name="fmaPoint" /></td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr></tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className="table-responsive table mt-2" id="dataTable-3" role="grid" aria-describedby="dataTable_info">
                                                <table className="table dataTable my-0" id="dataTable">
                                                    <thead>
                                                        <tr>
                                                            <th>FMAのファイル名</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><input className="form-control" type="text" name="fmaPath" /></td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr></tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div><button className="btn" type="submit">完了</button></form>
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
      `}</style>
        </div>
        <style>{`body {background-color: #f8f9fc}`}</style>
    </>
}

export default privateAdminRoute(EditPromisePage)
