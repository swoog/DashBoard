
export const updateTile = (index, result) => {
    return {
        type: 'UPDATE_TILE',
        index: index,
        result: result
    }
}

export const addTile = (tile) => {
    return {
        type: "ADD_TILE",
        tile : tile
    }
}