import { GET_ERRORS, SET_CURRENT_USER } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_code from 'jwt-decode';

export const registerUser = (userData, history) => dispatch => { //dispatch: 비동기 방식

    axios
        .post('users/signup', userData)
        .then(res => history.push('/login')) //login으로 화면이동
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const loginUser = userData => dispatch => {
    axios
        .post('users/signin', userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;

            // Set token to localStorage
            localStorage.setItem('jwtToken', token) //jwtToken: key값

            // Set token to auth header
            setAuthToken(token);
            // Decode toekn to get user data
            const decode = jwt_code(token);

            // Set current user
            dispatch(setCurrentUser(decode));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
}