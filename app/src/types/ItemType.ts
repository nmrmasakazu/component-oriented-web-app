export type Item = {
    id: number,
    item: string,
    username?: string,
}

export type UserItem = {
    item: Item[],
    notItem: Item[]
}

export type UserItemAll = {
    itemch: [],
    itemtr: []
}
