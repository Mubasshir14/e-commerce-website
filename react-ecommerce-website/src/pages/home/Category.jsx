import React from 'react'
import { Link } from 'react-router-dom';
import one from '../../assets/images/company/brand1.png'
import two from '../../assets/images/company/brand2.png'
import three from '../../assets/images/company/brand3.png'
import four from '../../assets/images/company/brand4.png'
import five from '../../assets/images/company/brand5.png'
import image1 from '../../assets/images/category/image1.png'
import image2 from '../../assets/images/category/image2.png'
import image3 from '../../assets/images/category/image3.png'
import image4 from '../../assets/images/category/image4.png'
import image5 from '../../assets/images/category/image5.png'

const companyLogo = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, img: five }
]


const Category = () => {
    return (
        <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-16'>


            {/* logo */}
            <div className="flex items-center justify-around flex-wrap gap-4 py-5">
                {
                    companyLogo.map(({ id, img }) => (
                        <div key={id}>
                            <img src={img} alt="" />
                        </div>
                    ))
                }
            </div>


            {/* category */}
            <div className='flex flex-col md:flex-row items-center gap-4 mt-8'>
                <p className='font-semibold md:-rotate-90 uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and  popular styles</p>

                <div>
                    <Link to='/'><img src={image1} alt="" className='hover:scale-105 transition-all duration-200'/></Link>
                </div>

                <div className='md:w-1/2'>
                    <div className='grid grid-cols-2 gap-2'>
                        <Link to='/'><img src={image2} alt="" className='hover:scale-105 transition-all duration-200'/></Link>
                        <Link to='/'><img src={image3} alt="" className='hover:scale-105 transition-all duration-200'/></Link>
                        <Link to='/'><img src={image4} alt="" className='hover:scale-105 transition-all duration-200'/></Link>
                        <Link to='/'><img src={image5} alt="" className='hover:scale-105 transition-all duration-200'/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;