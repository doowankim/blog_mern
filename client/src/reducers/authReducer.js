import { TEST_DISPATCH } from '../actions/types';


const initialState = {
    isAuthenticated: false, //token이 있는지 없는지에 따라 로그인 체크하는 것
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}