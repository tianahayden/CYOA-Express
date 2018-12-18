const initialstate = {
    pageInfo: '',
    history: []
}

export default function pageReducer(state = initialstate, action) {
    const { payload, type } = action;

    switch (type) {
        case 'GET_STORY_DETAILS': {
            const newHistory = [...state.history].push(payload.id)
            return {
                ...state,
                pageInfo: payload,
                history: newHistory
            }
        }
        default: {
            return state
        }
    }
}