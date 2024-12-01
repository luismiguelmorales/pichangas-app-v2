import React from 'react';
import { useEffect, useState } from 'react';
import MatchCard from './MatchCard';

const MatchesList = () => {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://36srwtkhj4.execute-api.us-east-1.amazonaws.com/development/get-matches-lambda');
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        setError('Error fetching matches');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="matches-list">
      {Array.isArray(matches) ? matches.map((match, index) => (
        <MatchCard key={index} match={match} />
      )) : null}
    </div>
  );
};

export default MatchesList;