import React from 'react';
import {connect} from 'react-redux';
import useCoronavirusData from 'hooks/useCoronavirusData';
import DataList from 'components/UI/DataList';

const Spain = function({globalData}) {
  const {data, loading} = useCoronavirusData('/spain/data.json');

  if (loading) {
    return <div>Cargando los datos de hoy...</div>;
  }
  return (
    <div>
      <h1>Estadísticas en España</h1>
      <DataList confirmed={data.confirmed} deaths={data.deaths} recovered={data.recovered} />
      <h2>Estadísticas globales</h2>
      <DataList
        confirmed={globalData.confirmed}
        deaths={globalData.deaths}
        recovered={globalData.recovered}
      />
    </div>
  );  
};

function mapStateToProps(state) {
  return {
    globalData: state
  };
}

export default connect(mapStateToProps)(Spain);
