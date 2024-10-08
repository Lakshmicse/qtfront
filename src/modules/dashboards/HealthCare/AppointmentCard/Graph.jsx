import React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const Graph = ({ data, color }) => {
  return (
    <ResponsiveContainer width='100%' height={70}>
      <BarChart barSize={4} data={data}>
        <Bar dataKey='users' fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;

Graph.defaultProps = {
  data: [],
};

Graph.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
};
