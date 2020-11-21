import React, { useState } from 'react'
import Nav from '../../../components/nav'
import { privateRoute } from '../../../components/privateRoute'

const EditPromisePage = () => {

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">約束表の編集</h3>
                        <h6 className="text-danger mb-4">約束表の編集</h6>
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">約束表の編集</p>
                            </div>
                            <div className="card-body">
                                <form method="post">
                                    <div className="form-group">
                                        <h5>挑戦項目の自己評価とコメント</h5>
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
                                                        <td>
                                                            <select className="form-control" name="point_1_ch">
                                                                <optgroup label="点数">
                                                                    <option value="-1" selected={true}>未選択</option>
                                                                    <option value="1">1</option>
                                                                </optgroup>
                                                            </select></td>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch_user">
                                                                <optgroup label="コメント">
                                                                    <option value="未選択" selected={true}>未選択</option>
                                                                    <option value="難しい">難しい</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>未記入</td>
                                                        <td>
                                                            <select className="form-control" name="point_1_ch">
                                                                <optgroup label="点数">
                                                                    <option value="-1" selected={true}>未選択</option>
                                                                    <option value="1">1</option>
                                                                </optgroup>
                                                            </select></td>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch_user">
                                                                <optgroup label="コメント">
                                                                    <option value="未選択" selected={true}>未選択</option>
                                                                    <option value="難しい">難しい</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>未記入</td>
                                                        <td>
                                                            <select className="form-control" name="point_1_ch">
                                                                <optgroup label="点数">
                                                                    <option value="-1" selected={true}>未選択</option>
                                                                    <option value="1">1</option>
                                                                </optgroup>
                                                            </select></td>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch_user">
                                                                <optgroup label="コメント">
                                                                    <option value="未選択" selected={true}>未選択</option>
                                                                    <option value="難しい">難しい</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>


                                                    </tr>
                                                    <tr>
                                                        <td>未記入</td>
                                                        <td>
                                                            <select className="form-control" name="point_1_ch">
                                                                <optgroup label="点数">
                                                                    <option value="-1" selected={true}>未選択</option>
                                                                    <option value="1">1</option>
                                                                </optgroup>
                                                            </select></td>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch_user">
                                                                <optgroup label="コメント">
                                                                    <option value="未選択" selected={true}>未選択</option>
                                                                    <option value="難しい">難しい</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr></tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr></tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <h5>自主トレ項目の自己評価とコメント</h5>
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
                                                        <td>
                                                            <select className="form-control" name="point_1_ch">
                                                                <optgroup label="点数">
                                                                    <option value="-1" selected={true}>未選択</option>
                                                                    <option value="1">1</option>
                                                                </optgroup>
                                                            </select></td>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch_user">
                                                                <optgroup label="コメント">
                                                                    <option value="未選択" selected={true}>未選択</option>
                                                                    <option value="難しい">難しい</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>未記入</td>
                                                        <td>
                                                            <select className="form-control" name="point_1_ch">
                                                                <optgroup label="点数">
                                                                    <option value="-1" selected={true}>未選択</option>
                                                                    <option value="1">1</option>
                                                                </optgroup>
                                                            </select></td>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch_user">
                                                                <optgroup label="コメント">
                                                                    <option value="未選択" selected={true}>未選択</option>
                                                                    <option value="難しい">難しい</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>未記入</td>
                                                        <td>
                                                            <select className="form-control" name="point_1_ch">
                                                                <optgroup label="点数">
                                                                    <option value="-1" selected={true}>未選択</option>
                                                                    <option value="1">1</option>
                                                                </optgroup>
                                                            </select></td>
                                                        <td>
                                                            <select className="form-control" name="activity_1_ch_user">
                                                                <optgroup label="コメント">
                                                                    <option value="未選択" selected={true}>未選択</option>
                                                                    <option value="難しい">難しい</option>
                                                                </optgroup>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr></tr>
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
                                                        <th>合計時間（分）</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><input className="form-control" type="text" name="activity_tr_time" /></td>
                                                    </tr>
                                                    <tr></tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr></tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div><button className="btn" type="submit">完了</button>
                                </form>
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

export default privateRoute(EditPromisePage)
