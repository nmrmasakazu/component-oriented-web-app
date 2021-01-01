import React from 'react'

const PromiseCard = (props: any) => {
    return <>
        <div className="card shadow">
            <div className="card-header py-3">
                <p className="text-primary m-0 font-weight-bold">{props.title}</p>
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
                            {props.user.map((row, index) =>
                                <tr>
                                    <td>{row.content}</td>
                                    <td>{row.point}</td>
                                    <td>{row.comment}</td>
                                </tr>
                            )}
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
                                <td>{props.therapist.comment}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                    {props.title === '自主トレーニング項目' ?
                        <table className="table dataTable my-0" id="dataTable">
                            <thead>
                                <tr>
                                    <th>合計時間</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{props.time}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr></tr>
                            </tfoot>
                        </table>
                        : null
                    }
                </div>
            </div>
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
        <style>{`body {background-color: #f8f9fc}`}</style>
    </>
}

export default PromiseCard
