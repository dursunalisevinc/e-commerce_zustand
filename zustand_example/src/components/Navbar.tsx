import { Heart, Package, ShoppingCart } from "phosphor-react"

// import { Heart, Package, Search, ShoppingCart } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex justify-between p-[1.5rem] py-[1rem]'>
            <div className='flex items-center gap-8'>
                <span className='font-bold text-2xl'>E-Commerce</span>
                <div className='text-secondary-400 flex gap-2 items-center bg-secondary-100 px-2 rounded-2xl'>
                    {/* <Search size={20} /> */}
                    <input placeholder='search' className='min-w-[15rem] px-1.5 py-1.5 rounded-md border border-none outline-none' type="text" />
                </div>
            </div>
            <div className='flex items-center'>
                <ul className='flex gap-8 text-sm'>
                    <li className='flex items-center gap-1.5'><Package size={18} /> Siparişlerim</li>
                    <li className='flex items-center gap-1.5'><Heart size={18} /> Favorilerim</li>
                    <li className='flex items-center gap-1.5'><ShoppingCart size={18} /> Sepetim</li>
                    <li>
                        <img src="img/user.jpeg" alt="user" className="h-6 w-6 bg-red-300 rounded-full shadow" />
                     </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar