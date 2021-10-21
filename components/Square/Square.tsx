import React, { useState, useCallback, useMemo } from 'react'
import cn from 'classnames'
import style from './Square.module.scss'

import { fillState, opponentFillState } from '../../store/actions';

import { useDispatch } from 'react-redux'

type SquareProp = {
  isClicked?: boolean,
  player: number,
  id: Number,
  elem: String,
  oppElem: String
}

const Square: React.FC<SquareProp> = ({ id, elem, oppElem, player, isClicked}) => {
 
  const dispatch = useDispatch();

  const changeSquare = useCallback(() => {
    dispatch(fillState(1, id, elem, true))  
    dispatch(opponentFillState(2, id, oppElem, true))  
  }, [])

  return (
    <div className={cn(style.square, 
      player === 1 && style[`square__${elem}`], 
      player === 2 && style[`square__${oppElem}`],
      isClicked && style.square_clicked)}
    onClick={changeSquare} /> 
  )}

export default React.memo(Square);