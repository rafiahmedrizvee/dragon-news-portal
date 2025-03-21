import Image from 'next/image';
import React from 'react';
import headerImg from '@/assets/images/logo.png'
import { getCurrentDate } from '@/utilities/getCurrentDate';

const Header = () => {

    const currentDate = getCurrentDate();
    return (
        <div className='md:w-full py-3 md:py-6'>
            <div className='text-center'>
                <div className='flex justify-center items-center '>
                <Image className='mx-auto w-4/6  md:w-3/6 h-4/6 md:h-2/6 ' src={headerImg} width={500} height={500} alt='logo' />
                </div>
                <h5 className='text-[12px] py-1 md:py-2 md:text-xl'>Journalist Without Fear or Favour</h5>
                <h4 className='text-[12px] pb-1 md:pb-2 md:text-xl'>{currentDate}</h4>
            </div>


        </div>
    );
};

export default Header;