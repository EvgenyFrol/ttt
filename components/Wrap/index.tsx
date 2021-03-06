import React, { useState, useEffect, useCallback } from 'react'

import Line from '../Line'

import style from './Wrap.module.scss'



const Wrap: React.FC = () => {
  const [badge, setBadge] = useState<String>('')
  const [opponentBadge, setOpponentBadge] = useState<String>('')
  const [isSelectedItem, setIsSelectedItem] = useState<boolean>(false)

  const setPlayerBadge = useCallback((el, oppEl) => {
    setBadge(el);
    setOpponentBadge(oppEl);
  }, [badge, opponentBadge]); 

  return (
    <div className={style.startGame}>
      {isSelectedItem && <div className={style.startGame__title}>
          <h1 className={style.startGame__header}>Вы выбрали элемент - {badge}</h1>
          <p className={style.startGame__desc}>Давайте начнем игру!</p>
        </div> }
      {!isSelectedItem && <div className={style.startGame__itemSelection}>
        <h1 className={style.startGame__header}>Выберите знак:</h1>
        <div className={style.startGame__selectEl}>
          <input type="radio" 
          id="cross" 
          onChange={() => setPlayerBadge('cross', 'zero')} 
          onClick={() => setIsSelectedItem(true)} name="ttt" value="cross"/>
          <label htmlFor="cross">Крестик</label>
          <input type="radio" id="zero" onChange={() => setPlayerBadge('zero', 'cross')} onClick={() => setIsSelectedItem(true)} name="ttt" value="zero" />
          <label htmlFor="zero">Нолик</label>
        </div>
      </div>}

      {!!badge && !!opponentBadge && <Line badge={badge} opponentBadge={opponentBadge} />}
    </div>
  )
}

export default React.memo(Wrap);