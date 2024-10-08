// store/actions.js
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const updateMessage = message => {
    return {
        type: UPDATE_MESSAGE,
        payload: message
    };
};
