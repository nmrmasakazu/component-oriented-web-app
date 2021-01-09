import React, { useEffect, useState } from 'react'
import Nav from '../../../components/nav'
import { privateRoute } from '../../../components/PrivateRoute'
import { initialPromiseTable } from '../../../../types/PromiseTable'
import { getPromiseDetail, updatePromiseDetailClient } from '../../../services/promisetable'
import { useRouter } from 'next/router'
import { whoami } from '../../../services/auth/clients'
import EditPromiseByClient from '../../../components/editPromiseByClient'
import { ResponseResult } from '../../../../types/ResponseResult'

const EditPromisePage = () => {

    const [promiseToday, setPromiseToday] = useState(initialPromiseTable)


    const router = useRouter()
    const id = router.query.id as string
    const name = whoami()

    const fetchData = async () => {
        const resultToday = await getPromiseDetail(name, Number(id))
        if (resultToday.success) {
            setPromiseToday(resultToday.data)
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
        const responseResult: ResponseResult = await updatePromiseDetailClient(promiseToday)
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
        handleInputChange: handleInputChange,
        point_1: promiseToday.point_1_ch,
        point_2: promiseToday.point_2_ch,
        point_3: promiseToday.point_3_ch,
        point_4: promiseToday.point_4_ch,
        activity_1_comment: promiseToday.activity_1_ch_user,
        activity_2_comment: promiseToday.activity_2_ch_user,
        activity_3_comment: promiseToday.activity_3_ch_user,
        activity_4_comment: promiseToday.activity_4_ch_user,
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        comments: ['簡単', '普通', '難しい']
    }

    const trProps = {
        title: '自主トレ項目',
        type: 'tr',
        handleInputChange: handleInputChange,
        point_1: promiseToday.point_1_tr,
        point_2: promiseToday.point_2_tr,
        point_3: promiseToday.point_3_tr,
        activity_1_comment: promiseToday.activity_1_tr_user,
        activity_2_comment: promiseToday.activity_2_tr_user,
        activity_3_comment: promiseToday.activity_3_tr_user,
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        comments: ['簡単', '普通', '難しい'],
        activity_tr_time: promiseToday.activity_tr_time
    }

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">約束表の編集</h3>
                        {/* <h6 className="text-danger mb-4">約束表の編集</h6> */}
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">約束表の編集</p>
                            </div>
                            <div className="card-body">
                                <form method="post" onSubmit={handleSubmit}>
                                    <EditPromiseByClient {...chProps} />
                                    <br />
                                    <EditPromiseByClient {...trProps} />
                                    <button className="btn" type="submit">完了</button>
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
