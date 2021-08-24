import {typeStore} from '../type/store'
import { INIT, FILL, OPPONENT_MOVE } from './actions';

const initialState: typeStore[] = [];

const randomProperty = (object) => {
    var keys = Object.keys(object);
    return object[keys[Math.floor(keys.length * Math.random())]];
  };

const rootReducer = (state = initialState, action: typeStore) => {

    switch(action.type) {
        case INIT:
            const newState: typeStore[] = []
            for (let i = 0; i <= 8; i++) {            
                newState.push({
                    type: 'INIT',
                    player: 0,
                    id: i,
                    isClicked: false,
                    elem: 'null'
                })
            }
            return newState;
        case FILL: 
            state.forEach(el => {
                if (el.id === action.id) {
                el.player = 1
                el.isClicked = action.isClicked
                el.elem = action.elem
                }
            })
            return [...state] 
        case OPPONENT_MOVE:
            if (!state.find((el) => !el.isClicked)) return state;

            let isFind = false;
            
            while (!isFind) {
                const randomId = randomProperty(state).id
                let stateEl = state.find((el) => el.id === randomId && !el.isClicked)
                if (stateEl) {
                    isFind = true;
                    stateEl.player = 2;
                    stateEl.isClicked = action.isClicked
                    stateEl.elem = action.elem
                }
            }
            return [...state]
        default:
            return state         
    }
}

export default rootReducer;