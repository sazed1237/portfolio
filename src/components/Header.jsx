import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';


const Header = () => {
    return (
        <header className='py-5 xl:py-5 text-white sticky top-0 z-50 bg-[#121217] bg-opacity-90 backdrop-blur-sm'>
            <div className='container mx-auto flex  items-center justify-between'>
                {/* logo */}
                <Link to={'/'}>
                    <h1 className='text-2xl md:text-4xl font-semibold'>
                        Sazed <span className='text-sm text-accent md:text-xl'>Creations's</span>
                    </h1>
                </Link>


                {/* desktop nav & hire me button */}
                <div className="hidden lg:flex items-center  gap-8">

                    <Nav></Nav>

                    <Link to={'/contact'}>
                        <Button>Hire me</Button>
                    </Link>
                </div>


                {/* mobile nav  */}
                <div className='lg:hidden'>
                    <MobileNav></MobileNav>
                </div>

            </div>
        </header>
    );
};

export default Header;