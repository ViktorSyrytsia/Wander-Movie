const initialState = {
        currentUser: {},
        activeUser: {}
}

export default (state = initialState, action) => {
        switch (action.type) {
                case 'SET_CURRENT_USER':

                        return {
                                ...state,
                                currentUser: {
                                        ...action.payload
                                }
                        }
                case 'SET_ACTIVE_USER':

                        return {
                                ...state,
                                activeUser: {
                                        ...action.payload
                                }

                        }

                default:
                        return state
        }
}