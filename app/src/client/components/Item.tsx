import React from 'react'
import Nav from './nav'
import { ItemControl } from '../../types/ItemControl'

const Item = (props: ItemControl) => {
    return <>
    <div id="wrapper">
        <Nav />
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div className="container-fluid">
                    <h3 className="text-dark mb-4">{props.title}の編集</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">{props.title}の追加（登録済みと同じ項目名の追加はエラーがでます）</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={props.handleSubmit}>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="item" placeholder="追加する挑戦項目を記入してください（255文字まで）" maxLength={255} onChange={props.handleNewItem}/>
                                </div>
                                <div className="form-group">
                                    <button className="btn">追加</button>
                                </div>
                            </form>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr></tr>
                                    </thead>
                                    <tbody></tbody>
                                    <tfoot>
                                        <tr></tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">登録済みの{props.title}を表示中（タイプミス以外の削除はしないでください）</p>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>項目</th>
                                            <th>削除</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.item.map((i, index) => 
                                        <tr key={i.id}>
                                            <td>{i.id} - {i.item}</td>
                                            <td><button className="btn" onClick={() => props.handleRemoveItem(i.id)}>削除</button></td>
                                        </tr>)}
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


        <style jsx>{`
h3 {
    margin: 20px;
}
div.card {
    margin: 0 0 20px 0;
}
button {
    margin: 0;
    width: 150px;
    background-color: rgb(0, 157, 158) !important;
    color: rgb(255,255,255) !important;
}
  `}</style>
    </div >
    <style>{`body {background-color: #f8f9fc}`}</style>
</>
}

export default Item
