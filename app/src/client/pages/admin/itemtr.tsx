import React, { useState, useEffect } from 'react'
import { itemtr, addItemtr, removeItemtr } from '../../services/item/itemtr'
import { ItemControl } from '../../../types/ItemControl'
import Item from '../../components/Item'
import { privateAdminRoute } from '../../components/privateRoute'

const ItemTr = () => {

    const [item, setItem] = useState([])
    const [newItemName, setNewItemName] = useState("")
    const [error, setError] = useState('')

    const fetchData = async () => {
        const items: any = await itemtr()
        const sorted = items.sort((i1, i2) => i1.id - i2.id)
        setItem(sorted)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const res = await addItemtr(newItemName)
        
        if (res == 'OK') {
            alert(`登録されました ${newItemName}`)
            setNewItemName("")
            fetchData()
        }
    }

    const handleNewItem = (e: React.ChangeEvent<any>) => {
        e.persist()
        setNewItemName(e.target.value)
    }

    const handleRemoveItem = async (id: number) => {
        await removeItemtr(id)
        fetchData()
    }

    const control: ItemControl = {
        handleSubmit: handleSubmit,
        handleNewItem: handleNewItem,
        handleRemoveItem: handleRemoveItem,
        item: item,
        title: '自主トレ項目',
        error: error
    }

    return <>
        <Item {...control} />
    </>
}

// return <>
//     <div id="wrapper">
//         <Nav />
//         <div className="d-flex flex-column" id="content-wrapper">
//             <div id="content">
//                 <div className="container-fluid">
//                     <h3 className="text-dark mb-4">自主トレ項目の編集</h3>
//                     <div className="card shadow">
//                         <div className="card-header py-3">
//                             <p className="text-primary m-0 font-weight-bold">自主トレ項目の追加（登録済みと同じ項目名の追加はエラーがでます）</p>
//                         </div>
//                         <div className="card-body">
//                             <form method="post">
//                                 <div className="form-group">
//                                     <input className="form-control" type="text" name="item" placeholder="追加する自主トレ項目を記入してください（255文字まで）" maxLength={255} />
//                                 </div>
//                                 <div className="form-group">
//                                     <button className="btn">追加</button>
//                                 </div>
//                             </form>
//                             <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
//                                 <table className="table dataTable my-0" id="dataTable">
//                                     <thead>
//                                         <tr></tr>
//                                     </thead>
//                                     <tbody></tbody>
//                                     <tfoot>
//                                         <tr></tr>
//                                     </tfoot>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card shadow">
//                         <div className="card-header py-3">
//                             <p className="text-primary m-0 font-weight-bold">登録済みの自主トレ項目を表示中（タイプミス以外の削除はしないでください）</p>
//                         </div>
//                         <div className="card-body">
//                             <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
//                                 <table className="table dataTable my-0" id="dataTable">
//                                     <thead>
//                                         <tr>
//                                             <th>項目</th>
//                                             <th>削除</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td></td>
//                                             <td>削除</td>
//                                         </tr>
//                                         <tr></tr>
//                                     </tbody>
//                                     <tfoot>
//                                         <tr></tr>
//                                     </tfoot>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <footer className="bg-white sticky-footer"></footer>
//         </div>


//         <style jsx>{`
//     h3 {
//         margin: 20px;
//     }
//     div.card {
//         margin: 0 0 20px 0;
//     }
//     button {
//         margin: 0;
//         width: 150px;
//         background-color: rgb(0, 157, 158) !important;
//         color: rgb(255,255,255) !important;
//     }
//       `}</style>
//     </div >
//     <style>{`body {background-color: #f8f9fc}`}</style>
// </>
// }

export default privateAdminRoute(ItemTr)
