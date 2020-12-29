import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Nav from '../../components/nav'
import PromiseCard from '../../components/promiseCard'
import { getPromiseDetail } from '../../services/promisetable'

const Detail = () => {

    const router = useRouter()
    const id = router.query.id as string

    const [promise, setPromise] = useState({
        round: '',
        activity_1_ch: '',
        activity_2_ch: '',
        activity_3_ch: '',
        activity_4_ch: '',
        point_1_ch: '',
        point_2_ch: '',
        point_3_ch: '',
        point_4_ch: '',
        activity_1_ch_user: '',
        activity_2_ch_user: '',
        activity_3_ch_user: '',
        activity_4_ch_user: '',
        comment_ch: '',
        activity_1_tr: '',
        activity_2_tr: '',
        activity_3_tr: '',
        point_1_tr: '',
        point_2_tr: '',
        point_3_tr: '',
        activity_1_tr_user: '',
        activity_2_tr_user: '',
        activity_3_tr_user: '',
        comment_tr: '',
        activity_tr_time: ''
    })

    const fetchData = async () => {
        const result = await getPromiseDetail(Number(id))
        const promise = result.data
        setPromise(promise)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const chRows = {
        title: '挑戦項目',
        user: [
            {
                id: 1,
                content: promise.activity_1_ch,
                point: promise.point_1_ch,
                comment: promise.activity_1_ch_user
            },
            {
                id: 2,
                content: promise.activity_2_ch,
                point: promise.point_2_ch,
                comment: promise.activity_2_ch_user
            },
            {
                id: 3,
                content: promise.activity_3_ch,
                point: promise.point_3_ch,
                comment: promise.activity_3_ch_user
            },
            {
                id: 4,
                content: promise.activity_4_ch,
                point: promise.point_4_ch,
                comment: promise.activity_4_ch_user
            },
        ],
        therapist: {
            comment: promise.comment_ch
        }
    }

    const trRows = {
        title: '自主トレーニング項目',
        user: [
            {
                id: 1,
                content: promise.activity_1_tr,
                point: promise.point_1_tr,
                comment: promise.activity_1_tr_user
            },
            {
                id: 2,
                content: promise.activity_2_tr,
                point: promise.point_2_tr,
                comment: promise.activity_2_tr_user
            },
            {
                id: 3,
                content: promise.activity_3_tr,
                point: promise.point_3_tr,
                comment: promise.activity_3_tr_user
            }
        ],
        therapist: {
            comment: promise.comment_tr
        },
        time: promise.activity_tr_time
    }

    return <>
        <div id="wrapper">
            <Nav />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">麻痺手を使用する約束表</h3>
                        <h4 className="text-dark mb-4">{promise.round}日目の約束表</h4>
                        <PromiseCard {...chRows} />
                        <br />
                        <PromiseCard {...trRows} />
                    </div>
                </div>
                <footer className="bg-white sticky-footer"></footer>
            </div>

            <style jsx>{`
        h3 {
            margin: 20px;
        }
        h4 {
            margin: 0 0 0 20px;
        }
      `}</style>
        </div>
        <style>{`body {background-color: #f8f9fc}`}</style>
    </>
}

export default Detail
