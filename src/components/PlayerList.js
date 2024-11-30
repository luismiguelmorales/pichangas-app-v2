// src/components/PlayerList.js
import React from 'react';
import Player from './Player';
import { useEffect, useState } from 'react';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://azwbhjr7o3.execute-api.us-east-1.amazonaws.com/default/get-players-lambda');
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        setError('Error fetching players');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="player-list">
      {players.map((player, index) => (
        <Player key={index} name={player.name} />
      ))}
    </div>
  );
};

export default PlayerList;