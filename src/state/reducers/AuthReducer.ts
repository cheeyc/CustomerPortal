
const initialState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'AUTHENTICATION_ACTION':
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

export default authReducer;
