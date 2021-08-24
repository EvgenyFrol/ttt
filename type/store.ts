export type typeStore = {
  type: string,
  player: number,
  id: number,
  isClicked: boolean,
  elem: string,
}

export type typeStat = {
  type: string,
  winLength: number,
  oppWinLength: number,
  lastWinner: string,
  payload: any
}