
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';




export const registerUser = (userData, history) => dispatch => { //dispatch: 비동기 방식

    axios
        .post('/users/signup', userData)
        .then(res => history.push('/login')) //login으로 화면이동
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Login - Get User Token
// export const loginUser = userData => dispatch => {
//     axios
//         .post('users/login', userData)
//         .then(res => {
//             // Save to localStorage
//             const { token } = res.data;
//             // Set token to ls
//             localStorage.setItem('jwtToken', token);
//             // Set token to auth header
//             setAuthToken(token);
//
//             // Decode token to get user data
//             const decode = jwt_decode(token);
//
//             // set current user
//             dispatch(setCurrentUser(decode));
//
//         })
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         );
// };
// Login - Get User Token
export const loginUser = userData => dispatch => {
    axios
        .post('/users/login', userData)
        .then(res => {
            // Save to localStorage
            const { tokenInfo } = res.data;
            // Set token to ls
            localStorage.setItem('jwtToken', tokenInfo);
            // Set token to Auth header
            setAuthToken(tokenInfo);
            // Decode token to get user data
            const decoded = jwt_decode(tokenInfo);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        );
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

//logout
export const logoutUser = () => dispatch => {
    // remove token from localstorage
    localStorage.removeItem('jwtToken');
    // remove auth header for futher requests
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};