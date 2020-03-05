// import {
//     GET_POSTS,
//     POST_LOADING,
//     SET_CURRENT_POSTS
// } from '../actions/types';
//
// const initialState = {
//     post: null,
//     posts: null,
//     loading: false
// };
//
// export default function (state = initialState, action) {
//     switch (action.type) {
//         case POST_LOADING:
//             return {
//                 ...state,
//                 loading: true
//             };
//         case GET_POSTS:
//             return {
//                 ...state,
//                 post: action.payload,
//                 loading: false
//             };
//         default:
//             return state;
//     }
// }