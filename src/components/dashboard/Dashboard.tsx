import React from 'react';
import BasicBars from '../utils/BarChart';

const Dashboard: React.FC = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className=''>
        <div className="">
          <div className="ml-10 grid grid-cols-2 grid-rows-2 h-screen">
            <div className="flex items-center justify-center">
              <BasicBars />
            </div>
            <div className="flex items-center justify-center">
              <BasicBars />
            </div>
            <div className="flex items-center justify-center">
              <BasicBars />
            </div>
            <div className="flex items-center justify-center">
              <BasicBars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// 2
export default Dashboard;
