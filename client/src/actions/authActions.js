import { TEST_DISPATCH } from './types';

export const registerUser = userData => {
    return {
        type: TEST_DISPATCH,
        payload: userData //유저정보를 담는 상수(payload)
    };
}