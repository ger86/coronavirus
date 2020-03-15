import React, {useEffect, useState} from 'react';
import DataList from './DataList';
import './App.css';

const App = function() {
  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
        const data = await response.json();
        setLoading(false);
        setDeaths(data.deaths);
        setConfirmed(data.confirmed);
        setRecovered(data.recovered);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando los datos de hoy...</div>;
  }

  return (
    <DataList
      confirmed={confirmed}
      deaths={deaths}
      recovered={recovered}
    />
  );
};

export default App;
