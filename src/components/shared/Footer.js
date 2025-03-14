
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {

    const navItems = [
        {
            route: 'Home',
            path: '/'
        },
        {
            route: 'Pages',
            path: '/pages'
        },
        {
            route: 'About',
            path: '/about'
        },
        {
            route: 'Contact',
            path: '/contact'
        },
    ]




    return (
        <div className=' p-5 md:p-10 bg-black text-white text-center'>

            <div className='flex justify-center items-center'>
                <div className='flex '>

                    <FontAwesomeIcon className='text-white h-5 md:h-[30px] ms-2 md:ms-5' icon={faFacebook} />
                    <FontAwesomeIcon className='text-white h-5 md:h-[30px] ms-2 md:ms-5' icon={faYoutube} />
                    <FontAwesomeIcon className='text-white h-5 md:h-[30px] ms-2 md:ms-5' icon={faLinkedin} />
                    <FontAwesomeIcon className='text-white h-5 md:h-[30px] ms-2 md:ms-5' icon={faTwitter} />
                    <FontAwesomeIcon className='text-white h-5 md:h-[30px]  ms-2 md:ms-5' icon={faWhatsapp} />

                </div>
            </div>

            <div className='flex justify-center items-center   mt-2 md:mt-5'>
                <ul className=" inline-block md: menu md:menu-horizontal px-1 text-center">

                    {
                        navItems.map(item => <li className='text-white uppercase font-semibold ' key={item.path}>
                            <Link href={item.path} >
                                {item.route}
                            </Link>
                        </li>)
                    }




                </ul>
            </div>

            <p className='text-neutral-400 text-sm'>@2025 The News Portal. Design by Developer Rafi Ahmed Rizvee.</p>
        </div>
    );
};

export default Footer;