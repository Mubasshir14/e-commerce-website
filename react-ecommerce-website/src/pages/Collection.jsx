import React from 'react';
import banner from '../assets/images/company/collection-bg.png';
import logo from '../assets/images/logo/zara-logo.png'
const Collection = () => {
    return (
        <div>
            <div className='bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20 ' style={{ backgroundImage: `url(${banner})` }}>
                <div className='h-[580px] flex justify-between  md:flex-row items-center'>
                    <div className='md:w-1/2'>

                    </div>
                    <div className='md:w-1/2'>
                        <img src={logo} alt="" />
                        <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.
                        </p>
                        <button className='px-6 py-2 font-semibold bg-white text-black rounded-sm hover:bg-blue-500'>See Collection</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
