
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

export const addTilesBoard = (boardName) => {
    return {
        type: "ADD_TILES_BOARD",
        name: boardName
    }
}

export const addSprintBoard = (boardName, vstsUrl, vstsProject) => {
    return {
        type:"ADD_SPRINT_BOARD",
        name: boardName,
        url: vstsUrl,
        project: vstsProject
    }
}

export const updateSprintBoard = (data) => {
    return {
        type:"UPDATE_SPRINT_BOARD",
        data: data
    }
}

export const closeSettings = () => {
    return {
        type:"CLOSE_SETTINGS"
    }
}

export const gotoSettings= () => {
    return {
        type:"GOTO_SETTINGS"
    }
}