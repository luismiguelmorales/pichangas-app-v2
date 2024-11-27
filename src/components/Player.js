// src/components/Player.js
import React from 'react';

const Player = ({ name }) => {
  return (
    <div className="player">
      <h2>{name}</h2>
    </div>
  );
};

export default Player;