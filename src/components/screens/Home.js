import React from 'react';
import {connect} from 'react-redux';
import DataList from 'components/UI/DataList';

const Home = function({globalData}) {
  if (!globalData) {
    return <div>Cargando los datos de hoy...</div>;
  }

  return (
    <DataList
      confirmed={globalData.confirmed}
      deaths={globalData.deaths}
      recovered={globalData.recovered}
    />
  );
};

function mapStateToProps(state) {
  return {
    globalData: state
  };
}

export default connect(mapStateToProps)(Home);
