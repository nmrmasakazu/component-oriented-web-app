import React from 'react'

const EditPromiseByClient = (props: any) => {
    return <>
        <div className="form-group">
            <h5>{props.title}の自己評価とコメント</h5>
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
                            <td>{props.activity_1}</td>
                            <td>
                                <select className="form-control" name={`point_1_${props.type}`} value={props.point_1 ? props.point_1: ''} onChange={props.handleInputChange}>
                                    <optgroup label="点数">
                                        <option>未選択</option>
                                        {props.points.map((point, index) =>
                                            <option value={point} key={index}>{point}</option>
                                        )}
                                    </optgroup>
                                </select></td>
                            <td>
                                <select className="form-control" name={`activity_1_${props.type}_user`} value={props.activity_1_comment ? props.activity_1_comment: ''} onChange={props.handleInputChange}>
                                    <optgroup label="コメント">
                                        <option>未選択</option>
                                        {props.comments.map((comment, index) =>
                                            <option value={comment} key={index}>{comment}</option>
                                        )}
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>{props.activity_2}</td>
                            <td>
                                <select className="form-control" name={`point_2_${props.type}`} value={props.point_2 ? props.point_2: ''} onChange={props.handleInputChange}>
                                    <optgroup label="点数">
                                        <option>未選択</option>
                                        {props.points.map((point, index) =>
                                            <option value={point} key={index}>{point}</option>
                                        )}
                                    </optgroup>
                                </select></td>
                            <td>
                                <select className="form-control" name={`activity_2_${props.type}_user`} value={props.activity_2_comment ? props.activity_2_comment: ''} onChange={props.handleInputChange}>
                                    <optgroup label="コメント">
                                        <option>未選択</option>
                                        {props.comments.map((comment, index) =>
                                            <option value={comment} key={index}>{comment}</option>
                                        )}
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                        <tr>

                            <td>{props.activity_3}</td>
                            <td>
                                <select className="form-control" name={`point_3_${props.type}`} value={props.point_3 ? props.point_3: ''} onChange={props.handleInputChange}>
                                    <optgroup label="点数">
                                        <option>未選択</option>
                                        {props.points.map((point, index) =>
                                            <option value={point} key={index}>{point}</option>
                                        )}
                                    </optgroup>
                                </select></td>
                            <td>
                                <select className="form-control" name={`activity_3_${props.type}_user`} value={props.activity_3_comment ? props.activity_3_comment: ''} onChange={props.handleInputChange}>
                                    <optgroup label="コメント">
                                        <option>未選択</option>
                                        {props.comments.map((comment, index) =>
                                            <option value={comment} key={index}>{comment}</option>
                                        )}
                                    </optgroup>
                                </select>
                            </td>


                        </tr>
                        {props.activity_tr_time !== undefined ? null :
                            <tr>
                                <td>{props.activity_4}</td>
                                <td>
                                    <select className="form-control" name={`point_4_${props.type}`} value={props.point_4 ? props.point_4: ''} onChange={props.handleInputChange}>
                                        <optgroup label="点数">
                                            <option>未選択</option>
                                            {props.points.map((point, index) =>
                                                <option value={point} key={index}>{point}</option>
                                            )}
                                        </optgroup>
                                    </select></td>
                                <td>
                                    <select className="form-control" name={`activity_4_${props.type}_user`} value={props.activity_4_comment ? props.activity_4_comment: ''} onChange={props.handleInputChange}>
                                        <optgroup label="コメント">
                                            <option>未選択</option>
                                            {props.comments.map((comment, index) =>
                                                <option value={comment} key={index}>{comment}</option>
                                            )}
                                        </optgroup>
                                    </select>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            {props.activity_tr_time === undefined ? null :
                <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                    <table className="table dataTable my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>合計時間（分）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className="form-control" type="text" name="activity_tr_time" value={props.activity_tr_time ? props.activity_tr_time: ''} onChange={props.handleInputChange} /></td>
                            </tr>
                            <tr></tr>
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
            }
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
        <style>{`body {background-color: #f8f9fc}`}</style>
    </>
}

export default EditPromiseByClient
