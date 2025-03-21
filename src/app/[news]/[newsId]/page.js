import { getSingleNews } from '@/utilities/getSingleNews';
import Image from 'next/image';
import React from 'react';

const DynamicNewsPage = async ({ params }) => {

    const { data: news } = await getSingleNews(params.newsId)
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
               <div className='grid grid-cols-2 gap-3'>
               <figure>
                    <Image className=' w-full m-4 md:m-20 '
                        src={news.thumbnail_url} width={500} height={500}
                        alt="news" />
                </figure>
                <figure>
                    <Image className=' w-full m-4 md:m-20 '
                        src={news.image_url} width={500} height={500}
                        alt="news" />
                </figure>
               </div>
                <div className="">
                    <div>
                        <button className='bg-red-500 rounded-2xl px-3 py-2 my-3 text-white'>{news.category}</button>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <p> {news.details} </p>

                </div>
                

                <div className='card-body'>
                    <Image className='rounded-full border-2 border-gray-400 p-1'
                        src={news.author.img}  alt="news" width={100} height={100}
                        />
                        <h2 className="card-title">{news.author.name}</h2>
                        <p> {news.author.published_date} </p>
                </div>

            </div>
        </div>
    );
};

export default DynamicNewsPage;