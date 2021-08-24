export const INIT = 'INIT'
export const FILL = 'FILL'
export const OPPONENT_MOVE = 'OPPONENT_MOVE'
export const UPDATED_STATE = 'UPDATED_STATE'
export const SEND_STATISTIC = 'SEND_STATISTIC'

export const initState = (text) => {
    return { type: INIT, text }
}

export const fillState = (player, id, elem, isClicked) => {
    return { type: FILL, player, id, elem, isClicked }
}

export const opponentFillState = (player, id, elem, isClicked) => {
    return { type: OPPONENT_MOVE, player, id, elem, isClicked }
}

export const sendStatistic = (winLength, oppWinLength, lastWinner) => {
    return { type: SEND_STATISTIC, payload: { winLength, oppWinLength, lastWinner }}
}

export const updatedState = () => {
    return { type: UPDATED_STATE }
}