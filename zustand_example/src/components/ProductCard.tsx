import { Coins, HeartStraight } from 'phosphor-react';
import { useStore } from '../zustand/store';



interface ProductCardProps {
    id: number,
    title: string
    description: string
    price: number
    image: string
    isTopItem: boolean
    isFavorite: boolean
}

const ProductCard = ({ product, isFavorite }: { product: ProductCardProps, isFavorite: boolean }) => {
    const selectFavorites = useStore((state) => state.selectFavorites);
    const handleSelectFavorites = (id: number) => { selectFavorites(id) };
    return (
        <div className='relative flex flex-col bg-primary-100 rounded-2xl shadow bg-gradient-to-r from-slate-200 to-white '>
            <div onClick={() => handleSelectFavorites(product.id)} className='absolute right-[1rem] top-[1rem] flex justify-center items-center rounded-full h-[2.2rem] w-[2.2rem] bg-white shadow border border-secondary-200'>
                <HeartStraight size={22} className={isFavorite ? "text-primary-700" : "text-secondary-200"} weight="fill" />
            </div>

            <div className="grow flex items-center justify-center rounded-t-2xl">
                <img src={product.image} alt={product.title} className='h-[15rem]' />
            </div>

            <div className='flex flex-col gap-2 relative rounded-2xl bg-white border border-slate-200 p-[1.2rem]'>
                <div className='absolute top-[-0.7rem] right-0 left-0 flex justify-center'>
                    <span className='bg-yellow-400 text-secondary-900 rounded-full px-4 py-0.5 text-sm font-semibold shadow-md shadow-yellow-300'>Top İtems</span>
                </div>
                <div className='font-bold capitalize text-center'>{product.title}</div>
                <div className='text-center text-xs text-secondary-400'>{product.description}</div>
                <div className='flex justify-center'>
                    <span className='flex items-center gap-2 border-2 border-primary-500 text-primary-500 px-4 py-1 rounded-full font-semibold'>
                        <Coins size={18} weight="fill" />
                        {product.price}.00₺ </span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard