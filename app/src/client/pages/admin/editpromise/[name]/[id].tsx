import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getPromiseDetail, updatePromiseDetail } from '../../../../services/promisetable'
import Nav from '../../../../components/nav'
import { privateAdminRoute } from '../../../../components/PrivateRoute'
import EditPromiseByAdmin from '../../../../components/editPromiseByAdmin'
import { initialPromiseTable } from '../../../../../types/PromiseTable'
import { initialUserItemAll } from '../../../../../types/InitialValues'
import { getUserItemAll } from '../../../../services/item/userItem'
import { ResponseResult } from '../../../../../types/ResponseResult'

const EditPromisePage = () => {

    const router = useRouter()
    const name = router.query.name as string
    const id = router.query.id as string

    const [promiseYesterday, setPromiseYesterday] = useState(initialPromiseTable)
    const [promiseToday, setPromiseToday] = useState(initialPromiseTable)
    const [userItemAll, setUserItemAll] = useState(initialUserItemAll)

    const fetchData = async () => {
        const resultYesterday = await getPromiseDetail(name, Number(id) - 1)
        if (resultYesterday.success) {
            setPromiseYesterday(resultYesterday.data)
        }
        const resultToday = await getPromiseDetail(name, Number(id))
        if (resultToday.success) {
            setPromiseToday(resultToday.data)
        }
        const resultUserItem = await getUserItemAll(name)
        if (resultUserItem.success) {
            setUserItemAll(resultUserItem.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        e.persist()
        setPromiseToday({
            ...promiseToday,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        // setError('')
        const responseResult: ResponseResult = await updatePromiseDetail(promiseToday)
        if (responseResult.success) {
            alert(`【登録完了】 約束表: ${promiseToday.round}日目`)
            fetchData()
        } else {
            // setError(responseResult.message)
        }
    }

    const chProps = {
        title: '挑戦項目',
        type: 'ch',
        round: promiseToday.round,
        items: userItemAll.itemch,
        handleInputChange: handleInputChange,
        activity_1: promiseToday.activity_1_ch,
        activity_2: promiseToday.activity_2_ch,
        activity_3: promiseToday.activity_3_ch,
        activity_4: promiseToday.activity_4_ch,
        comment: promiseToday.comment_ch,
        // 昨日の情報
        activity_1_yesterday: promiseYesterday.activity_1_ch,
        activity_2_yesterday: promiseYesterday.activity_2_ch,
        activity_3_yesterday: promiseYesterday.activity_3_ch,
        activity_4_yesterday: promiseYesterday.activity_4_ch,
        point_1_yesterday: promiseYesterday.point_1_ch,
        point_2_yesterday: promiseYesterday.point_2_ch,
        point_3_yesterday: promiseYesterday.point_3_ch,
        point_4_yesterday: promiseYesterday.point_4_ch,
        activity_1_comment_yesterday: promiseYesterday.activity_1_ch_user,
        activity_2_comment_yesterday: promiseYesterday.activity_2_ch_user,
        activity_3_comment_yesterday: promiseYesterday.activity_3_ch_user,
        activity_4_comment_yesterday: promiseYesterday.activity_4_ch_user,
        comment_yesterday: promiseYesterday.comment_ch,
    }

    const trProps = {
        title: '自主トレ項目',
        type: 'tr',
        round: promiseToday.round,
        items: userItemAll.itemtr,
        handleInputChange: handleInputChange,
        activity_1: promiseToday.activity_1_tr,
        activity_2: promiseToday.activity_2_tr,
        activity_3: promiseToday.activity_3_tr,
        comment: promiseToday.comment_tr,
        // 昨日の情報
        activity_1_yesterday: promiseYesterday.activity_1_tr,
        activity_2_yesterday: promiseYesterday.activity_2_tr,
        activity_3_yesterday: promiseYesterday.activity_3_tr,
        point_1_yesterday: promiseYesterday.point_1_tr,
        point_2_yesterday: promiseYesterday.point_2_tr,
        point_3_yesterday: promiseYesterday.point_3_tr,
        activity_1_comment_yesterday: promiseYesterday.activity_1_tr_user,
        activity_2_comment_yesterday: promiseYesterday.activity_2_tr_user,
        activity_3_comment_yesterday: promiseYesterday.activity_3_tr_user,
        comment_yesterday: promiseYesterday.comment_tr
    }

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">約束表の編集</h3>
                        {/* <h6 className="text-danger mb-4">ERROR</h6> */}
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">約束表の編集</p>
                            </div>
                            <div className="card-body">
                                <form method="post" onSubmit={handleSubmit}>
                                    <EditPromiseByAdmin {...chProps}/>
                                    <br />
                                    <EditPromiseByAdmin {...trProps}/>
                                    <button className="btn" type="submit">完了</button></form>
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
