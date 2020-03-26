import React from 'react';
import {connect} from 'react-redux';
import useCoronavirusData from 'hooks/useCoronavirusData';
import DataList from 'components/UI/DataList';
import GoogleChart from 'components/UI/GoogleChart';

const Spain = function({globalData}) {
  const {data, loading} = useCoronavirusData('/spain/data.json');
  console.log(data);

  if (loading) {
    return <div>Cargando los datos de hoy...</div>;
  }

  const chartData = [['Fecha', 'Confirmados', 'Muertes', 'Recuperados']];
  data.ts.forEach(row => {
    const date = new Date(row.t * 1000);
    chartData.push([
      date.toLocaleDateString('es'),
      row.c,
      row.d,
      row.r
    ]);
  });

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
      <GoogleChart data={chartData} title="Cornavirus en España" />
    </div>
  );  
};

function mapStateToProps(state) {
  return {
    globalData: state
  };
}

export default connect(mapStateToProps)(Spain);
