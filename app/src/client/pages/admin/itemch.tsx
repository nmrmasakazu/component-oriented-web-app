import React, { useState, useEffect } from 'react'
import { privateAdminRoute } from '../../components/privateRoute'
import { itemch, addItemch, removeItemch } from '../../services/item/itemch'
import { ItemControl } from '../../../types/ItemControl'
import Item from '../../components/Item'

const ItemCh = () => {

    const [item, setItem] = useState([])
    const [newItemName, setNewItemName] = useState('')
    const [error, setError] = useState('')

    const fetchData = async () => {
        const items: any = await itemch()
        const sorted = items.sort((i1, i2)=>i1.id - i2.id)
        setItem(sorted)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const res = await addItemch(newItemName)
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
          await removeItemch(id)
          fetchData()
      }

      const control: ItemControl = {
          handleSubmit: handleSubmit,
          handleNewItem: handleNewItem,
          handleRemoveItem: handleRemoveItem,
          item: item,
          title: '挑戦項目',
          error: error
      }

    return <>
        <Item {...control} />
    </>
}

ItemCh.getInitialProps = async ctx => {
    // const item = await itemch()
}

export default privateAdminRoute(ItemCh)
