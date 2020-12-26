import React from 'react'

export type ItemControl = {
    handleSubmit: (e: any) => void
    handleNewItem: (e: React.ChangeEvent<any>) => void,
    handleRemoveItem: (id: number) => void,
    item: any,
    title: string
}