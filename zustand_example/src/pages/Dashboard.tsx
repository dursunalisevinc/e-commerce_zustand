import React from 'react'
import ProductCard from '../components/ProductCard'

const Dashoboard = () => {
    return (
        <div className='h-[calc(100vh-8rem)] p-[1.5rem] pt-0 overflow-y-auto'>
            <div className='grid grid-cols-12 gap-6 overflow-y-auto'>
                    <div className="col-span-4">
                        <ProductCard/>
                    </div>
                    <div className="col-span-4">
                        <ProductCard/>
                    </div>
                    <div className="col-span-4">
                        <ProductCard/>
                    </div>
                    <div className="col-span-4">
                        <ProductCard/>
                    </div>
                    <div className="col-span-4">
                        <ProductCard/>
                    </div>
                    <div className="col-span-4">
                        <ProductCard/>
                    </div>
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