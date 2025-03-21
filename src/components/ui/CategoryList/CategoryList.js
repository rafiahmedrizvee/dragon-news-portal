import { getAllCategories } from '@/utilities/getAllCategories';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {

    const {data: allCategories} = await getAllCategories()

    return (
        <div className='p-5 bg-gray-100'>
            <h1 className='m-0  text font-semibold'>Categories</h1>
            <div className='divider mt-0'></div>
            {

                allCategories.map(category => <Link  key={category._id}href={`/categories/news?category=${category.title.toLowerCase()}` } 
                   >
                    <button  className='mb-5 btn btn-outline w-full uppercase'>{category.title}</button>
                </Link>
                     

                )
            }





            
        </div>
    );
};

export default CategoryList;