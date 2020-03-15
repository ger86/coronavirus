import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DataContainer = styled.div`
  text-align: center;
`;

const Number = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const Data = ({number, title}) => (
  <DataContainer>
    <Number>{number}</Number>
    <div>{title}</div>
  </DataContainer>
);

Data.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Data;
