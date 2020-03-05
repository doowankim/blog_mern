// import axios from 'axios';
// import {GET_POSTS, GET_ERRORS, POST_LOADING} from './types';
//
// //history: 화면 이동
// export const CreateText = (postData, history) => dispatch => { //dispatch: 비동기 방식
//
//     axios
//         .post('/posts', postData)
//         .then(res => history.push('/total'))
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         );
// };
//
// // GET Current post
// export const getCurrentPost = () => dispatch => {
//     dispatch(setPostLoading());
//     axios
//         .get('/posts')
//         .then(res =>
//             dispatch({
//                 type: GET_POSTS,
//                 payload: res.data
//             })
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_POSTS,
//                 payload: {}
//             })
//         );
// };
//
// // Profile Loading
// export const setPostLoading = () => {
//     return {
//         type: POST_LOADING
//     };
// };