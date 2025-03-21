

import { getAllNews } from '@/utilities/getAllNews';
import Image from 'next/image';
import React from 'react';

const LatestNews = async () => {

  const { data } = await getAllNews()


  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image className='w-full'
            src={data[0].thumbnail_url} width={500} height={500}
            alt="news" />
        </figure>
        <div className="">
          <button className='bg-red-500 rounded-2xl px-3 py-2 my-3 text-white'>{data[0].category}</button>
          <h2 className="card-title">{data[0].title}</h2>
          <p> {data[0].details.length > 200 ? data[0].details.slice(0, 300) + ' .....' : data[0].details} </p>

        </div>
      </div>

      {/* {data map 4 item } */}

      <div className='grid  md:grid-cols-2 gap-5 my-5'>
        {
          data.slice(1, 5).map(news => <div key={news._id} className="card bg-base-100 shadow-sm">
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
              <p> {news.details.length > 200 ? news.details.slice(0, 300) + ' .....' : news.details} </p>

            </div>
          </div>)
        }
      </div>

    </div>
  );
};

export default LatestNews;