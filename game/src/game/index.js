
import React from 'react';
import { GameEngine } from "react-game-engine";
import { Player } from "./entities/Player";
import Move from "./systems/Move"

export const Game = () => {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "blue" }}
        systems={[Move]}
        entities={{
            player: { pw: false, pos: { x: 0,  y: 0}, renderer: <Player />}
        }}>

      </GameEngine>
    );
}