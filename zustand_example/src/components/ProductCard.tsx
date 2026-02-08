import { CirclePoundSterling, Heart } from 'lucide-react'
import React from 'react'

const ProductCard = () => {
    return (
        <div className='relative flex flex-col bg-primary-100 rounded-2xl shadow bg-gradient-to-r from-slate-200 to-white '>
            <div className='absolute right-[1rem] top-[1rem] flex justify-center items-center rounded-full h-[2rem] w-[2rem] bg-white shadow'>
                <Heart size={20} className='text-secondary-300' />
            </div>
                            
            <div className="grow flex items-center justify-center rounded-t-2xl">
        <img src="img/t-shirt.png" alt="Ayakkabı" className='h-[15rem]' />
            </div>

            <div className='flex flex-col gap-2 relative rounded-2xl bg-white border border-slate-200 p-[1.2rem]'>
                <div className='absolute top-[-0.7rem] right-0 left-0 flex justify-center'>
                    <span className='bg-yellow-400 text-secondary-900 rounded-full px-4 py-0.5 text-sm font-semibold shadow-md shadow-yellow-300'>Top İtems</span>
                </div>
                <div className='font-bold capitalize text-center'>Lorem ipsum dolor sit amet.</div>
                <div className='text-xs text-secondary-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui alias ab sapiente?</div>
                <div className='flex justify-center'>
                    <span className='flex items-center gap-2 border-2 border-primary-500 text-primary-500 px-4 py-1 rounded-full font-semibold'> <CirclePoundSterling size={20}/> 300₺ </span>
                    </div>
                
            </div>
        </div>
    )
}

export default ProductCard