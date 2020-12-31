import React, { useState, useEffect } from 'react'
import Nav from '../../components/nav'
import { privateRoute } from '../../components/privateRoute'
import { getPromisesClient } from '../../services/promisetable'
import { whoami } from '../../services/auth/clients'

const UserPage = () => {

    const [promises, setPromises] = useState([])

    const fetchData = async () => {
        const result = await getPromisesClient()
        if (result.success) {
            const promises = result.data
            setPromises(promises.sort((i1, i2) => i1.id - i2.id))
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const name = whoami()

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
                                            {promises.map((promise, index) =>
                                                <tr>
                                                    <th>{promise.round}日目</th>
                                                    <th><button className="btn" type="button"><a href={`/detail/${name}/${promise.id}`}>詳細の表示</a></button></th>
                                                    <th><button className="btn" type="button"><a href={`/user/editpromise/${promise.id}`}>コメント等の編集</a></button></th>
                                                    <th>{promise.update_time_user}</th>
                                                    <th>{promise.update_time}</th>
                                                </tr>
                                            )}
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

export default privateRoute(UserPage)
