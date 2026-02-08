import React from 'react'
import ProductCard from '../components/ProductCard'

const Dashoboard = () => {
    return (
        <div className='p-[1.5rem] pt-0'>
            <div className='grid grid-cols-12 gap-6'>
                    <div className="col-span-4">
                        <ProductCard/>
                    </div>
                    <div className="col-span-4">
                        <ProductCard/>
                    </div>
                    <div className="col-span-4">
                        <ProductCard/>
                    </div>
            </div>
        </div>
    )
}

export default Dashoboard