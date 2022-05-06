const DUMMY_TOKEN = 'loggedIn';

const Reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
                return {
                    ...state,
                    authToken: "loggedIn",
                };

            return state;
        case 'LOGOUT':
            return {
                ...state,
                authToken: null,
            };
        default:
            return state;
    }
};

export default Reducer;