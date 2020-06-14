import * as types from '../actions/types';

export const showModal = component => ({
    type: types.SHOW_MODAL,
    payload: component
});

export const hideModal =() => ({
    type: types.HIDE_MODAL
});
