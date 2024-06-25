import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/instagram/img1.png'
import img2 from '../../assets/images/instagram/img2.png'
import img3 from '../../assets/images/instagram/img3.png'
import img4 from '../../assets/images/instagram/img4.png'
import img5 from '../../assets/images/instagram/img5.png'
// import img6 from '../../assets/images/instagram/img6.png'

const Newsletters = () => {
    return (
        <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 mb-12'>
            <div className='bg-[#1E2B32] bg-opacity-5 xl:px-28 px-4 py-16'>
            <h2 className="text-3xl font-semibold text-center capitalize mb-8">
                Follow products and discounts on Instagram
            </h2>

            {/* insta grid */}
            <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
                <Link><img src={img1} alt="" /></Link>
                <Link><img src={img2} alt="" /></Link>
                <Link><img src={img3} alt="" /></Link>
                <Link><img src={img4} alt="" /></Link>
                <Link><img src={img5} alt="" /></Link>
                {/* <Link><img src={img6} alt="" /></Link> */}
            </div>

            {/* newsletter */}
            <div>
                <h2 className="text-3xl font-semibold text-center capitalize mb-8">
                    Subscribe to the newsletter
                </h2>
                <form className='md:w-1/2 mx-auto text-center'>
                    <input type="email" name="email" id="email" placeholder='Email address...' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4' />
                    <input type="submit" value="SUBMIT" className='bg-black text-white px-6 py-1 rounded-sm' />
                </form>
            </div>
        </div>
        </div>
    )
}

export default Newsletters