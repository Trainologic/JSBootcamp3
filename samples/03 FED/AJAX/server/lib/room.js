const Player = require('./player');

class Room {
    constructor(name) {
        this.name = name;

        this.players = [];
    }

    getPlayers() {
        return this.players;
    }

    getPlayerByName(name) {
        const player = this.players.find((player) => {
           return player.name === name;
        });

        return player || null;
    }

    getRoomScore() {
        return this.players.reduce((score, player) => {
            return score + player.score;
        }, 0);
    }

    addUniquePlayer(name) {
        if (this.getPlayerByName(name)) {
            return false;
        }

        this.players.push(new Player(name));

        return true;
    }
}

module.exports = Room;