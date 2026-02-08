import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FilterCard from '../components/FilterCard';
import { Star } from 'lucide-react';
import Checkbox from '../components/Checkbox';


interface Category {
  id: number;
  title: string;
  img: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Adidas",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    id: 2,
    title: "Nike",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 3,
    title: "Puma",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 4,
    title: "Reebok",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 5,
    title: "New Balance",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 6,
    title: "Adidas",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    id: 7,
    title: "Nike",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 8,
    title: "Puma",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 9,
    title: "Reebok",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 10,
    title: "New Balance",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
];

const Layout = () => {
  const [isChecked, setIsChedcked] = useState<boolean>(false);
  return (
    <div className='h-screen flex flex-col cursor-default'>
      <Navbar />
      <div className='flex gap-4 px-[1.5rem] py-[1rem] py-4 bg-secondary-100'>
        {
          categories.map((oItem, oIndex) => (
            <div key={oIndex} className='rounded-2xl bg-white px-4 py-1 border border-secondary-200 shadow'> {oItem.title} </div>
          ))
        }
      </div>
      <div className='grid grid-cols-12 grow bg-secondary-100'>
        <div className='h-full col-span-3 p-[1.5rem] pt-0 pr-0'>
          <div className='h-full flex flex-col gap-4'>
            <FilterCard title='Price Range' subtitle="sdsdsds">
              <div className='rounded-xl bg-secondary-100 h-10'>
              </div>
            </FilterCard>
            <FilterCard title='Start Rating'>
              <div className='flex gap-1'>
                <Star
                  size={18}
                  fill="currentColor"
                  className="text-yellow-300"
                />
              </div>
            </FilterCard>
            <div className="grow rounded-2xl bg-white p-4 shadow">
              <div className="font-semibold mb-2">Brand</div>

              <div className="flex flex-col gap-2 max-h-[15.5rem] overflow-y-auto">
                {categories.map((oItem, oIndex) => (
                  <div key={oIndex} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={oItem.img} className="max-h-4 max-w-6" alt="" />
                      <div>{oItem.title}</div>
                    </div>
                    <Checkbox
                      onChange={(isCheck) => {
                        setIsChedcked(isCheck);
                        console.log({ isCheck });
                      }}
                      checked={isChecked}
                    />
                  </div>
                ))}
              </div>
            </div>
            <FilterCard title='Ayarlar'>
              <div className='flex gap-4 justify-between items-center'>
                <button className='w-full bg-secondary-100 border border-slate-200 shadow font-semibold rounded-2xl px-4 py-1'>Varsayılan</button>
                <button className='w-full bg-primary-600 text-white border border-slate-200 shadow font-semibold rounded-2xl px-4 py-1'>Varsayılan</button>
              </div>
            </FilterCard>
          </div>
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default Layout