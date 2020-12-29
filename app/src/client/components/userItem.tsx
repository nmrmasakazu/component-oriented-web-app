import React from 'react'
import Nav from './nav'
import { Item } from '../../types/Item'

const UserItemComponent = (props: any) => {
    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">{props.name}さんの{props.title}の編集</h3>
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">登録済みの{props.title}</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>項目</th>
                                                <th>削除</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.userItem.map((item: Item, index) =>
                                                <tr key={index}>
                                                    <td>{item.id} - {item.item}</td>
                                                    <td><button className="btn" onClick={() => props.handleRemoveUserItem(item)}>削除</button></td>
                                                </tr>

                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">未登録の{props.title}</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>項目</th>
                                                <th>追加</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.notUserItem.map((item: Item, index) =>
                                                <tr key={index}>
                                                    <td>{item.id} - {item.item}</td>
                                                    <td><button className="btn" onClick={() => props.handleAddUserItem(item)}>追加</button></td>
                                                </tr>

                                            )}
                                        </tbody>
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

export default UserItemComponent
