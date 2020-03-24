import React from 'react';
import { useDispatch } from 'react-redux';
import useCoronavirusData from 'hooks/useCoronavirusData';
import DataList from 'components/UI/DataList';
import {SET_GLOBAL_DATA} from 'reducer';

const Home = function() {
  const {data, loading} = useCoronavirusData('/full.json');
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
