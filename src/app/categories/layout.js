import CategoryList from '@/components/ui/CategoryList/CategoryList';
import React from 'react';

const CategoriesLayout = ({children}) => {
    return (
        <div className=' p-4 md:px-16 md:flex gap-5 py-5'>
        <div className='w-3/3 md:w-1/3 ' >
       <CategoryList></CategoryList>
       
        </div>
        <div className='w-3/3 md:w-2/3  '>
       { children}
   
        </div>
        
      </div>
    );
};

export default CategoriesLayout;