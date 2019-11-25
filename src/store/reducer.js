import Immutable from 'seamless-immutable';

import { SIMPLE_ACTION_TRIGGER, SIMPLE_ACTION_SUCCESS,  SIMPLE_ACTION_FAILURE } from './actionTypes';


const initialState = Immutable({
    guests: {
        1: {
            id: 1,
            timestamp: 1557928401103,
            name: 'Bob',
            isGoing: true,
            favouriteFood: 'Pizza',
        },
        2: {
            id: 2,
            timestamp: 1557928430870,
            name: 'Lara',
            isGoing: false,
            favouriteFood: 'Mango',
        },
    },
    loading: false,
    message: '',
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SIMPLE_ACTION_TRIGGER:
            return state.setIn(['loading', ], true).setIn(['message'], '')
        case SIMPLE_ACTION_FAILURE:
            return state.setIn(['loading', ], false).setIn(['message'], 'Failed to invite guest ' + payload)
        case SIMPLE_ACTION_SUCCESS:
            return state.merge({
                guests: {
                    ...state.guests,
                    [payload.id]: payload,
                },
                loading: false,
                message: 'Succesfuly invited guest ' + payload.name
            })
        default:
            return state
    }
}
