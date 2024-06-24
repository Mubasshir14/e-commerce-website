import React, { useState } from 'react';
import { FaBars, FaSearch, FaTimes, FaUser, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '/logo.png';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const navItems = [
        { title: "Jewelry & Accessories", path: "/" },
        { title: "Clothing & Shoes", path: "/" },
        { title: "Home & Living", path: "/" },
        { title: "Wedding & Party", path: "/" },
        { title: "Toys & Entertainment", path: "/" },
        { title: "Art & Collectibles", path: "/" },
        { title: "Craft Supplies & Tools", path: "/" },
    ];

    return (
        <header className='max-w-screen-2xl xl:px-28 px-4 mx-auto absolute top-0 right-0 left-0'>
            <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
                <FaSearch className="text-Black w-6 h-6 cursor-pointer hidden md:block" />
                <a href="/" className="">
                    <img src={logo} alt="Logo" />
                </a>

                {/* btn */}
                <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
                    <a href="/" className="flex items-center gap-2">
                        <FaUser /> Account
                    </a>
                    <a href="/" className="flex items-center gap-2 container">
                        <FaShoppingBag /> Shopping
                    </a>
                </div>

                {/* nav for small devices */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {
                            menu ? <FaTimes className='w-5 h-5 text-Black' /> : <FaBars className='w-5 h-5 text-Black' />
                        }
                    </button>
                </div>
            </nav>
            <hr />

            {/* category items */}
            <div className='pt-4 hidden lg:block'>
                <ul className='lg:flex items-center justify-between text-Black'>
                    {
                        navItems.map(({ title, path }) => (
                            <li key={title} className='hover:text-blue-400 my-3 cursor-pointer'>
                                <Link to={path}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* only mobile */}
            <div className='lg:hidden'>
                <ul className={`bg-black text-white px-4 py-2 rounded ${menu ? "" : "hidden"}`}>
                    {navItems.map(({ title, path }) => (
                        <li key={title} className="hover:text-orange-500 my-3 cursor-pointer">
                            <Link
                                to={path}
                                onClick={toggleMenu}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Navbar;
