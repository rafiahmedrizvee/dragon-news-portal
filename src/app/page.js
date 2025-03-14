import LatestNews from '@/components/ui/LatestNews/LatestNews';
import React from 'react';

const HomePage = () => {
  return (
    <div className=' p-4 md:px-16 md:flex gap-5 py-5'>
      <div className='w-3/3 md:w-2/3 '>
     <LatestNews></LatestNews>
      </div>
      <div className='w-3/3 md:w-1/3 bg-blue-500 '>
      <h1>right</h1>
      </div>
      
    </div>
  );
};

export default HomePage;