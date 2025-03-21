import { getAllNews } from '@/utilities/getAllNews';
import { getCurrentDate } from '@/utilities/getCurrentDate';
import Image from 'next/image';
import React from 'react';

const Sidebar = async () => {

    const currentDate = getCurrentDate();

    const {data} = await getAllNews()
    return (
        <div>
          <div className="card bg-base-100 shadow-sm">
           <figure>
             <Image className='w-full'
               src={data[5].thumbnail_url} width={500} height={500}
               alt="news" />
           </figure>
           <div className="">
             <button className='bg-red-500 rounded-2xl px-3 py-2 my-3 text-white'>{data[5].category}</button>
             <h2 className="card-title">{data[5].title}</h2>
             <p> {data[5].details.length > 200 ? data[5].details.slice(0,120) + ' .....' : data[5].details} </p>
         
           </div>
         </div>

{/* {data map 8 item } */}

<div className=' my-5'>
{
data.slice(6,14).map(news => <div key={news._id} className="bg-base-100 shadow-sm my-5 flex justify-center items-center">

<Image className='w-16 h-16 rounded-2xl '
    src={news.thumbnail_url} width={150} height={150} 
    alt="news" />

<div className="card-body">

<h2 className="card-title">{news.title}</h2>
<h2 className="text-sm text-purple-400">{currentDate}</h2>


</div>
</div> )
}
</div>

<div className="shadow-sm">
          
             <Image className='rounded-xl'
               src={data[14].thumbnail_url} width={500} height={500}
               alt="news" />
         
          
         </div>
        </div>
    );
};

export default Sidebar;