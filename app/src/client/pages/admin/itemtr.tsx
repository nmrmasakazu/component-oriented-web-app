import React, { useState, useEffect } from 'react'
import { getItem, addItem, removeItem } from '../../services/item/item'
import { ItemControl } from '../../../types/ItemControl'
import Item from '../../components/Item'
import { privateAdminRoute } from '../../components/privateRoute'

const ItemTr = () => {

    const [item, setItem] = useState([])
    const [newItemName, setNewItemName] = useState('')
    const [error, setError] = useState('')

    const fetchData = async () => {
        const result = await getItem('tr')
        const sorted = result.data.sort((i1, i2) => i1.id - i2.id)
        setItem(sorted)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const result = await addItem('tr', newItemName)
        if (result.success) {
            alert(`【登録完了】 項目名: ${result.data.item}`)
            setNewItemName('')
            fetchData()
        } else {
            setError(result.message)
        }
    }

    const handleNewItem = (e: React.ChangeEvent<any>) => {
        e.persist()
        setNewItemName(e.target.value)
    }

    const handleRemoveItem = async (id: number) => {
        await removeItem('tr', id)
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

export default privateAdminRoute(ItemTr)
