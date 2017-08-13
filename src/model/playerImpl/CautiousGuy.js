const Player = require('../Player');

class CautiousGuy extends Player {
  static get ID() {
    return 'CautiousGuy';
  }
  algorithm(history) {
    const PERIOD = 4;
    if (history.currentIndex > PERIOD) {
      let wins = history.allRounds.slice(-PERIOD).reduce((w, round) => {
        let p = round.plays(this);
        if (p.its === true) {
          return w + 1;
        } else {
          return w;
        }
      }, 0)
      if (wins > PERIOD / 2) {
        return false;
      } else {
        return true;
      }
    } else {
      return !!(history.currentIndex % 2);
    }
  }
}

module.exports = CautiousGuy;