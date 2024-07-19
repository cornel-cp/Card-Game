import { useState } from 'react';

const useLog = () => {
  const [logEntries, setLogEntries] = useState([]);

  const addLogEntry = (turn, playerName, cardName, cardText) => {
    const entry = `Turn ${turn}: ${playerName} played ${cardName}: ${cardText}`;
    setLogEntries((prevEntries) => [...prevEntries, entry]);
  };

  return { logEntries, addLogEntry };
};

export default useLog;
