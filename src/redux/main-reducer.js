const CREATE_TOOLBAR_TYPE_AND_VALUE = 'watermark-editor/mainReducer/CREATE_TOOLBAR_TYPE_AND_VALUE'

const initalState = {
    toolbarType: '',
    value: ''
}

const mainReducer = (state = initalState, action) => {
    switch (action.type) {
        case CREATE_TOOLBAR_TYPE_AND_VALUE: {
            return {
                ...state,
                toolbarType:action.toolbarType,
                value:action.value
            }
        }
        default: return state
    }
}

export const createToolbarTypeAndValue = (toolbarType, value) => {
    return {
        type: CREATE_TOOLBAR_TYPE_AND_VALUE, toolbarType, value
    }
}

export default mainReducer