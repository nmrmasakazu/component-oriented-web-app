import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { privateAdminRoute } from '../../../components/PrivateRoute'
import { getUserItem, addUserItem, removeUserItem } from '../../../services/item/userItem'
import { UserItem, Item } from '../../../../types/ItemType'
import UserItemComponent from '../../../components/userItem'

const UserItemTr = () => {

    const router = useRouter()
    const name = router.query.name as string

    const [userItem, setUserItem] = useState([])
    const [notUserItem, setNotUserItem] = useState([])
    const fetchData = async () => {
        const result = await getUserItem('tr', name)
        const userItem: UserItem = result.data
        setUserItem(userItem.item.sort((i1, i2) => i1.id - i2.id))
        setNotUserItem(userItem.notItem.sort((i1, i2) => i1.id - i2.id))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleAddUserItem = async (item: Item) => {
        const itemWithUsername = {
            ...item,
            username: name
        }
        await addUserItem('tr', itemWithUsername)
        fetchData()
    }

    const handleRemoveUserItem = async (item: Item) => {
        const itemWithUsername = {
            ...item,
            username: name
        }
        await removeUserItem('tr', itemWithUsername)
        fetchData()
    }

    const userItemControl = {
        title: '自主トレ項目',
        name: name,
        userItem: userItem,
        notUserItem: notUserItem,
        handleAddUserItem: handleAddUserItem,
        handleRemoveUserItem: handleRemoveUserItem
    }

    return <>
        <UserItemComponent {...userItemControl} />
    </>
}

export default privateAdminRoute(UserItemTr)
