// token의 삽입, 삭제 (login, logout)

import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        //Apply token
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //Delete Auth header
        delete axios.defaults.headers.common['Authorization']
    }
};

export default setAuthToken;