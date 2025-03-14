import React from 'react';
import Header from './Header';
import logo from '@/assets/images/navlogo.png'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';



const navItems = [
    {
        route:'Home',
        path:'/'
    },
    {
        route:'Pages',
        path:'/pages'
    },
    {
        route:'About',
        path:'/about'
    },
    {
        route:'Contact',
        path:'/contact'
    },
]

const Navbar = () => {
    return (
<div>
<Header></Header>
<div className="navbar bg-black px-16 ">
<div className="navbar-start justify-between md:justify-start w-[65%] md:w-[50%]">
<div className="dropdown">
    <div tabIndex={0} role="button" className=" bg-white btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
    </div>
    <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
   {
    navItems.map(item => <li className='text-black uppercase font-semibold' key={item.path}>
        <Link href={item.path} >
        {item.route}
    </Link>
    </li>)
   } 
   <li className='text-black uppercase font-semibold'>
        <details>
            <summary>Recent News</summary>
            <ul className="p-2 text-white bg-gray-700">
                <li><a>Trending News</a></li>
                <li><a>Upcoming News</a></li>
                <li><a>Current News</a></li>
            </ul>
        </details>
    </li>
        
    </ul>
</div>
<Link href='/' className="me-2 md:me-0">
    <Image className='' src={logo} width={120} height={120} alt='navlogo' />
</Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">

   {
    navItems.map(item => <li className='text-white uppercase font-semibold' key={item.path}>
        <Link href={item.path} >
        {item.route}
    </Link>
    </li>)
   } 


   
    <li className='text-white uppercase font-semibold'>
        <details>
            <summary>Recent News</summary>
            <ul className="p-2 text-white bg-gray-700">
                <li><a>Trending News</a></li>
                <li><a>Upcoming News</a></li>
                <li><a>Current News</a></li>
            </ul>
        </details>
    </li>
   
</ul>
</div>
<div className=" navbar-end w-[35%] md:w-50%">


<FontAwesomeIcon className='text-white  md:h-[30px]  ms-2 md:ms-5' icon={faFacebook} />
<FontAwesomeIcon className='text-white  md:h-[30px]  ms-2 md:ms-5' icon={faYoutube} />
<FontAwesomeIcon className='text-white  md:h-[30px] ms-2 md:ms-5' icon={faLinkedin} />
<FontAwesomeIcon className='text-white  md:h-[30px] ms-2 md:ms-5' icon={faTwitter} />
<FontAwesomeIcon className='text-white  md:h-[30px]  ms-2 md:ms-5' icon={faWhatsapp} />

</div>
</div>
</div>
    );
};

export default Navbar;