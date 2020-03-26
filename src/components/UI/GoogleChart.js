import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';

const chartStyle = {
  width: '900px',
  height: '500px'
};

const GoogleChart = function({data, title}) {
  const chartDiv = useRef(null);

  function onErrorGoogleChartsScript() {
    console.log('error');
  }

  function onLoadGoogleChartsScript() {
    if (window.google) {
      window.google.charts.load('current', {packages: ['corechart']});
      window.google.charts.setOnLoadCallback(onLoadGoogleCharts);
    }
  }

  function onLoadGoogleCharts() {
    const finalChartData = window.google.visualization.arrayToDataTable(data);

    const options = {
      title,
      curveType: 'function',
      legend: {position: 'bottom'}
    };

    if (chartDiv.current) {
      var chart = new window.google.visualization.LineChart(chartDiv.current);
      chart.draw(finalChartData, options);
    }
  }

  return (
    <>
      <Script
        url="https://www.gstatic.com/charts/loader.js"
        onError={onErrorGoogleChartsScript}
        onLoad={onLoadGoogleChartsScript}
      />
      <div ref={chartDiv} style={chartStyle} />
    </>
  );
};

GoogleChart.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string
}

GoogleChart.defaultProps = {
  title: 'Gráfico'
}

export default React.memo(GoogleChart);
