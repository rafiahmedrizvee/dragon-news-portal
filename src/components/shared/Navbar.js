import React from 'react';
import Header from './Header';
import logo from '@/assets/images/navlogo.png'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';



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
        route: 'Categories',
        path: '/categories/news?category=all-news'
    },
    {
        route: 'Contact',
        path: '/contact'
    },
]

const Navbar = () => {
    return (



    <div>
    <Header></Header>
    <nav>
    <div className="navbar bg-black md:px-16">
    <div className="navbar-start  justify-between md:justify-start  w-[65%] md:w-[50%]">
    <div className="dropdown">
        <div tabIndex={0} role="button" className="bg-white btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {
                navItems.map(item => <li className='text-black uppercase font-semibold' key={item.path}><Link href={item.path}> {item.route} </Link></li>)
            }
            <li className='text-black uppercase font-semibold'>
                <details>
                                        <summary>Recent News</summary>
                                        <ul className="p-2 text-black z-20">
                                            <li><a>News coming one</a></li>
                                            <li><a>News coming two</a></li>
                                            <li><a>News coming there</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                        <Link href='/' className="me-2 md:me-0">
                            <Image className='' src={logo} width={120} height={120} alt='news-portal' />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">

                            {
                                navItems.map(item => <li className='text-white uppercase font-semibold' key={item.path}><Link href={item.path}> {item.route} </Link></li>)
                            }
                            <li className='text-white uppercase font-semibold'>
                                <details>
                                    <summary className=''>Recent News</summary>
                                    <ul className="p-2 text-black z-20">
                                        <li><a>News coming one</a></li>
                                        <li><a>News coming two</a></li>
                                        <li><a>News coming there</a></li>

                                    </ul>
                                </details>
                            </li>

                        </ul>
                    </div>
                    <div className="navbar-end w-[35%] md:w-[50%] ">

                        <Link href='https://www.facebook.com/rizvi.roxas/about' target='blank'>
                            <FontAwesomeIcon className='text-white h-[20px] md:h-[40px] ms-4' icon={faFacebook} />

                        </Link>
                        <Link href='https://www.youtube.com' target='blank'>
                            <FontAwesomeIcon className='text-white h-[20px] md:h-[40px] ms-4' icon={faYoutube} />

                        </Link>

                        <Link href='https://www.linkedin.com'>
                            <FontAwesomeIcon className='text-white  h-[20px] md:h-[40px] ms-4' icon={faLinkedin} />
                        </Link>
                        <Link href='https://www.twitter.com'>
                            <FontAwesomeIcon className='text-white  h-[20px] md:h-[40px] ms-4' icon={faTwitter} />
                        </Link>

                        <Link href='https://www.whatsapp.com' target='blank'>
                            <FontAwesomeIcon className='text-white h-[20px] md:h-[40px] ms-4' icon={faWhatsapp} />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;