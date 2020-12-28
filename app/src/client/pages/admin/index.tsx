import React, { useState, useEffect } from 'react'
import Nav from '../../components/nav'
import { privateAdminRoute } from '../../components/privateRoute'
import { getClients } from '../../services/auth/clients'
import { User } from '../../../types/User'


const UserTablePage = () => {

    const initialUsers: User[] = []
    const [users, setUsers] = useState(initialUsers)

    const fetchData = async () => {
        const result = await getClients()
        const fetchedUsers: User[] = result.data
        setUsers(fetchedUsers)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">登録済みのユーザー</h3>
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">登録済みのユーザーを表示中</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                    <table className="table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th>ユーザー名</th>
                                                <th>自主トレ項目</th>
                                                <th>挑戦項目</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => 
                                                <tr key={index}>
                                                    <td>{user.username}</td>
                                                    <td><button className="btn" type="button"><a href={`/admin/useritemtr/${user.id}`}>自主トレ項目</a></button></td>
                                                    <td><button className="btn" type="button"><a href={`/admin/useritemch/${user.id}`}>挑戦項目</a></button></td>
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

export default privateAdminRoute(UserTablePage)
