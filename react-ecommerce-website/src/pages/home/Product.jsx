import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../components/Cards';
import Category from './Category';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sort, setSort] = useState('default');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json'); // Ensure the file name is correct here
                const data = await response.json();
                // console.log(data);
                setProducts(data);
                setFilteredItems(data)
            } catch (error) {
                console.log('Error Fetching Data:', error);
            }
        };
        fetchData();
    }, []);

    // console.log(products);


    // filtering
    const filterItems = (category) => {
        const filtered = category === 'all' ? (products) : products.filter((item) => item.category === category)
        setFilteredItems(filtered)
        selectedCategory(category)
    }


    // show all products
    const showAll = () => {
        setFilteredItems(products)
        setSelectedCategory('all')
    }

    return (
        <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 mb-12'>
            <h2 className='text-3xl font-semibold capitalize text-center my-8'>Products</h2>

            {/* products card */}
            <div>
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between j items-center space-y-3 mb-8'>

                    {/* all btn */}
                    <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                        <button onClick={showAll}>All Products</button>
                        <button onClick={() => filterItems('Dress')}>Clothing</button>
                        <button onClick={() => filterItems('Hoodies')}>Hoodies</button>
                        <button onClick={() => filterItems('Bag')}>Bags</button>
                        <button onClick={() => filterItems('Shoe')}>Shoe</button>
                        <button onClick={() => filterItems('Glasses')}>Glasses</button>
                    </div>


                    {/* filter */}

                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black  p-2'>
                            <FaFilter className='text-white h-4 w-4' />
                        </div>
                        <select className='bg-black text-white px-2 py-1 rounded-sm'>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">A-Z</option>
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    </div>
                </div>

                <Cards filtteredItems={filteredItems} />

            </div>
        </div>
    )
}

export default Product