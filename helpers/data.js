export function Data() {
  var winLength = 0;
  var oppWinLength = 0;
  var lastWinner = 'Отсутствует'

  Object.defineProperty(this, 'winLength', {
    get: function() {
      console.log('get!');
      return winLength;
    },
    set: function(value) {
      winLength = value
    }
  });

  Object.defineProperty(this, 'oppWinLength', {
    get: function() {
      console.log('get!');
      return oppWinLength;
    },
    set: function(value) {
      oppWinLength = value
    }
  });

  Object.defineProperty(this, 'lastWinner', {
    get: function() {
      console.log('get!');
      return lastWinner;
    },
    set: function(value) {
      lastWinner = value
    }
  });

  this.getData = function() { return {
    win: winLength,
    opp: oppWinLength,
    last: lastWinner
  } };
}

export default new Data();