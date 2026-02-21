import ProductCard from '../components/ProductCard'
import { productsFakeData } from '../shared/data';
import { useStore } from '../zustand/store';


const Dashoboard = () => {

    const favArr = useStore((state) => state.favArr);
    return (
        <div className='h-[calc(100vh-8rem)] p-[1.5rem] pt-0 overflow-y-auto'>
            <div className='grid grid-cols-12 gap-6 overflow-y-auto'>
                {productsFakeData.map((product) => (
                    <div key={product.id} className="col-span-3">
                        <ProductCard product={product} isFavorite={favArr.includes(product.id)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashoboard