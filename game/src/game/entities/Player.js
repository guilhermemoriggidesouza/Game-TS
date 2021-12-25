
import React from 'react';

export const Player = ({ pos, stat, pw }) => {
    const size = 100;
    const health = 100;
    const position = pos
    const status = stat
    const power = pw
    return (
        <>
            <div style={{ left: position.x, top: position.y, position: "absolute" }}>
                {power == true && <img src="explosion.png" style={{ width: "50px", height: "50px" }}></img>}
                <img src="player.png"></img>
            </div>
        </>
    );
}
