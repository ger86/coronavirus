import React from 'react';
import useFetch from './hooks/useFetch';
import DataList from './DataList';

const Home = function() {
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/full.json');

  if (loading) {
    return <div>Cargando los datos de hoy...</div>;
  }

  return <DataList confirmed={data.confirmed} deaths={data.deaths} recovered={data.recovered} />;
};

export default Home;
