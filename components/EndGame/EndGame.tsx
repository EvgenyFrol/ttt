import React from 'react'
import style from './EndGame.module.scss'

type endGame = {
  text: String,
  repeatGame: () => void
}

const EndGame: React.FC<endGame> = ({text, repeatGame}) => {

  return (
    <div className={style.endGame}>
      <div className={style.endGame__header}>
        <h1 className={style.endGame__text}>
          {text}
        </h1>
      </div>
      <div className={style.endGame__buttonWrapper}>
        <button className={style.endGame__button} onClick={repeatGame}>
          Желаете повторить?
        </button>
      </div>
    </div>
  )
}

export default EndGame;