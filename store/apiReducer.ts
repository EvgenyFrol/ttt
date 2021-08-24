
import { typeStat } from '../type/store'
import { SEND_STATISTIC  } from './actions';

const stat = {}

const apiReducer = (state = stat, action: typeStat) => {

  switch (action.type) {
    case SEND_STATISTIC:
     return  action.payload
    //  {
    //     playerWin: action.winLength,
    //     oppWin: action.oppWinLength,
    //     lastWinner: action.lastWinner
    //   }
    default:
      return state
  }  
}

export default apiReducer;