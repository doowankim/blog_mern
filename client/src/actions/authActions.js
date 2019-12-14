import { GET_ERRORS } from './types';
import axios from 'axios';

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