import React from 'react'

const EditPromiseByAdmin = (props: any) => {
    return <>
        {props.round === 1 ? null :
            <>
                <h5>前日の{props.title}</h5>
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
                                <td>{props.activity_1_yesterday}</td>
                                <td>{props.point_1_yesterday}</td>
                                <td>{props.activity_1_comment_yesterday}</td>
                            </tr>
                            <tr>
                                <td>{props.activity_2_yesterday}</td>
                                <td>{props.point_2_yesterday}</td>
                                <td>{props.activity_2_comment_yesterday}</td>
                            </tr>
                            <tr>
                                <td>{props.activity_3_yesterday}</td>
                                <td>{props.point_3_yesterday}</td>
                                <td>{props.activity_3_comment_yesterday}</td>
                            </tr>
                            <tr>
                                <td>{props.activity_4_yesterday}</td>
                                <td>{props.point_4_yesterday}</td>
                                <td>{props.activity_4_comment_yesterday}</td>
                            </tr>
                            <tr></tr>
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
                <div>
                    <h5>前日の{props.title}に対するコメント</h5>
                    <textarea className="form-control" name={`comment_${props.type}`} maxLength={500} onChange={props.handleInputChange} value={props.comment_yesterday ? props.comment_yesterday: ''}>{props.comment}</textarea>
                </div>
            </>}
        <div>
            <h5 className="highlight">{props.title}に対するコメント</h5>
            <textarea className="form-control" name={`comment_${props.type}`} maxLength={500} onChange={props.handleInputChange} value={props.comment ? props.comment: ''}>{props.comment}</textarea>
        </div>
        <div>
            <h5 className="highlight">本日の{props.title}の入力</h5>
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
                                <select className="form-control" name={`activity_1_${props.type}`} value={props.activity_1 ? props.activity_1 : ''} onChange={props.handleInputChange}>
                                    <optgroup label="挑戦項目">
                                        <option>未選択</option>
                                        {props.items.map((item, index) =>
                                            <option key={index}>{item.item}</option>
                                        )}
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select className="form-control" name={`activity_2_${props.type}`} value={props.activity_2 ? props.activity_2 : ''} onChange={props.handleInputChange}>
                                    <optgroup label="挑戦項目">
                                        <option>未選択</option>
                                        {props.items.map((item, index) =>
                                            <option key={index}>{item.item}</option>
                                        )}
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select className="form-control" name={`activity_3_${props.type}`} value={props.activity_3 ? props.activity_3 : ''} onChange={props.handleInputChange}>
                                    <optgroup label="挑戦項目">
                                        <option>未選択</option>
                                        {props.items.map((item, index) =>
                                            <option key={index}>{item.item}</option>
                                        )}
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                        {props.activity_4 === undefined ? null :
                            <tr>
                                <td>
                                    <select className="form-control" name={`activity_4_${props.type}`} value={props.activity_4 ? props.activity_4 : ''} onChange={props.handleInputChange}>
                                        <optgroup label="挑戦項目">
                                            <option>未選択</option>
                                            {props.items.map((item, index) =>
                                                <option key={index}>{item.item}</option>
                                            )}
                                        </optgroup>
                                    </select>
                                </td>
                            </tr>
                        }
                    </tbody>
                    <tfoot>
                        <tr></tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <style jsx>{`
    h3 {
        margin: 20px;
    }
    h5 {
        color: rgb(0,0,0);
        margin: 20px 0 10px 0;
    }
    h5.highlight {
        background-color: #ffe500;
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

export default EditPromiseByAdmin
