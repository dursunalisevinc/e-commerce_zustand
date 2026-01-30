import { Heart, Package, Search, ShoppingBasket } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex justify-between p-[1.5rem]'>
            <div className='flex items-center gap-8'>
                <span className='font-bold text-2xl'>LOGO</span>
                <div className='text-secondary-400 flex gap-2 items-center bg-secondary-100 px-2 rounded-2xl'>
                    <Search size={20} />
                    <input placeholder='search' className='min-w-[15rem] px-1.5 py-1.5 rounded-md border border-none outline-none' type="text" />
                </div>
            </div>
            <div className='flex items-center'>
                <ul className='flex gap-8'>
                    <li className='flex items-center gap-1'><Package size={20} /> Orders</li>
                    <li className='flex items-center gap-1'><Heart size={20} /> Orders</li>
                    <li className='flex items-center gap-1'><ShoppingBasket size={20} /> Orders</li>
                    <li><div className='rounded-full bg-secondary-100 p-3 shadow'></div></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar