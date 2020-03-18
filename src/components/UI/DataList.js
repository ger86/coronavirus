import React from 'react';
import PropTypes from 'prop-types';
import Data from 'components/UI/Data';
import FlexContainer from 'components/UI/FlexContainer';

const DataList = ({deaths, confirmed, recovered}) => (
  <FlexContainer>
    <Data title="Muertes" number={deaths} />
    <Data title="Casos confirmados" number={confirmed} />
    <Data title="Casos recuperados" number={recovered} />
  </FlexContainer>
);

DataList.propTypes = {
  deaths: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired
};

export default DataList;
