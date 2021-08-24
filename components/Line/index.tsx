import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import Square from '../Square/Square'
import EndGame from '../EndGame/EndGame'
import store from '../../store/'
import { useDispatch } from 'react-redux'
import { sendStatistic } from '../../store/actions';
import {typeStore} from '../../type/store'

import style from './Line.module.scss'

type figure = {
  badge: String,
  opponentBadge: String,
}

const Line: React.FC<figure> = ({badge, opponentBadge}) => { 
  const [isBegin, setIsBegin] = useState<boolean>(false)
  const [isEnd, setIsEnd] = useState<boolean>(false)
  const [state, setState] = useState<typeStore[]>([])
  const [closingText, setClosingText] = useState<string>('')
  const [lastWinner, setLastWinner] = useState<string>('Отсутствует')
  const [winLength, setWinLength] = useState<number>(0)
  const [oppWinLength, setOppWinLength] = useState<number>(0)

  const winners = [
    [0, 1, 2], 
    [0, 4, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8]
  ]
  
  const winningCombination = useCallback((store) => {
    let winValue = []
    let oppWinValue = []

    store.forEach(item => {
      if (item.isClicked && item.elem !== 'null') {
        if (item.player === 1) {
          winValue.push(item.id) 
          
          winners.forEach((group) => {
            if (group.reduce((acc, el) => acc && winValue.includes(el), true)) {
              setIsEnd(true)
              setLastWinner('Игрок')
              setWinLength(winLength + 1);    
              
              dispatch(sendStatistic(winLength, oppWinLength, lastWinner));
              setClosingText('Вы победили!')
            }  
            console.log(winLength, oppWinLength, lastWinner)

          })
        } else {
          oppWinValue.push(item.id) 
          
          winners.forEach((group) => {
            if (group.reduce((acc, el) => acc && oppWinValue.includes(el), true)) {
              setIsEnd(true)
              setLastWinner('Бот')
              setOppWinLength(oppWinLength + 1)      

              dispatch(sendStatistic(winLength, oppWinLength, lastWinner))
              setClosingText('Вы проиграли!')
            }
          })
        }
      }
    })
  }, [])

   

  const dispatch = useDispatch();

  const startGame = useCallback(() => {
    dispatch({type: 'INIT'})
    setIsBegin(true)
    setIsEnd(false)
  }, [])

  useEffect(() => {
    store.subscribe(() => (
      setState(store.getState().rootReducer)))
  }, [])

  useEffect(() => {
    winningCombination(state)
    console.log(winLength, oppWinLength, lastWinner)   
  }, [state])
  
  return (
    <>
      {!isBegin && <button onClick={startGame}>Начать игру</button>}
      {isBegin && <div className={style.playingField}>
        {state.map(item => (
          <Square isClicked={item.isClicked} id={item.id} player={item.player} elem={badge} oppElem={opponentBadge} key={item.id}/>
        ))}
      </div>}
      {isEnd && <EndGame text={closingText} repeatGame={startGame} />}
    </>
  )
}

export default Line;