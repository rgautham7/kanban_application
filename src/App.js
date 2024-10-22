import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import { fetchTickets } from './utils/api';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    const storedGrouping = localStorage.getItem('grouping');
    const storedSorting = localStorage.getItem('sorting');
    setGrouping(storedGrouping || 'status');
    setSorting(storedSorting || 'priority');

    fetchTickets().then(data => setTickets(data));
  }, []);

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem('grouping', newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
    localStorage.setItem('sorting', newSorting);
  };

  return (
    <div className="App">
      <Header
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={handleGroupingChange}
        onSortingChange={handleSortingChange}
      />
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;
