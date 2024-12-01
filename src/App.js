import React, { useState } from 'react';
import MatchesList from './components/MatchesList';
import PlayerForm from './components/PlayerForm';

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="App">
      {
        formOpen ? <PlayerForm setFormOpen={setFormOpen} /> : <MatchesList setFormOpen={setFormOpen} />
      }
    </div>
  );
}

export default App;