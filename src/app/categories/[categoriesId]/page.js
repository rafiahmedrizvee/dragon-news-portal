import { getNewsByCategory } from '@/utilities/getNewsByCategory';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async ({ searchParams }) => {

    const { data } = await getNewsByCategory(searchParams.category)
    return (
<div className='grid grid-cols-2 gap-5'>

{
data.map(news => <Link href={`/${news.category.toLowerCase()}/${news._id}`} key={news._id}><div  className="card bg-base-100 shadow-sm">
    <figure>
        <Image className='h-[230px] w-full object-cover'
            src={news.thumbnail_url} width={500} height={500}
            alt="news" />
    </figure>
    <div className="">
        <div>
            <button className='bg-red-500 rounded-2xl px-3 py-2 my-3 text-white'>{news.category}</button>
        </div>
        <h2 className="card-title">{news.title}</h2>
        <p> {news.details.length > 150 ? news.details.slice(0, 150) + ' .....' : news.details} </p>
    
    </div>
    </div></Link> )
}
</div>
    );
};

export default DynamicNewsPage;