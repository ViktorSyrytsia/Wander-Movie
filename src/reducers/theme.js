const initialState = {
        inverted: false
}

export default (state = initialState, action) => {
        switch (action.type) {
                case 'THEME_CHANGE':

                        return {
                                ...state,
                                inverted: !state.inverted
                        }

                default:
                        return state
        }
}