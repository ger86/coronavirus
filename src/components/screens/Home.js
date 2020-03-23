import React from 'react';
import { useDispatch } from 'react-redux';
import useFetch from 'hooks/useFetch';
import DataList from 'components/UI/DataList';
import {SET_GLOBAL_DATA} from 'reducer';

const Home = function() {
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/full.json');
  const dispatch = useDispatch();

  if (loading) {
    return <div>Cargando los datos de hoy...</div>;
  }

  dispatch({
    type: SET_GLOBAL_DATA,
    data: {
      confirmed: data.confirmed,
      deaths: data.deaths,
      recovered: data.recovered
    }
  });

  return <DataList confirmed={data.confirmed} deaths={data.deaths} recovered={data.recovered} />;
};

export default Home;
