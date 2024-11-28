// src/components/Dashboard/ProgressChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';

interface ProgressChartProps {
  data: any;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default ProgressChart;
