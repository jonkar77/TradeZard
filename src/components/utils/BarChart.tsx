import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
const BasicBars: React.FC = () => {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C', 'group D'] }]}
      series={[
        { data: [4, 3, 5, 8] }
      ]}
      width={500}
      height={300}
    />
  );
}

export default BasicBars;
