import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FilterCard from '../components/FilterCard';

import Checkbox from '../components/Checkbox';
import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@radix-ui/react-slider";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { Star } from 'phosphor-react';

interface Category {
  id: number;
  title: string;
  img: string;
}

const priceData = [
  { price: 0, v1: 5, v2: 12 },
  { price: 100, v1: 20, v2: 28 },
  { price: 200, v1: 45, v2: 40 },
  { price: 300, v1: 30, v2: 55 },
  { price: 400, v1: 60, v2: 42 },
  { price: 500, v1: 35, v2: 60 },
  { price: 650, v1: 50, v2: 38 },
  { price: 800, v1: 25, v2: 30 },
  { price: 1000, v1: 18, v2: 20 },
  { price: 1200, v1: 8, v2: 14 },
  { price: 1500, v1: 4, v2: 8 },
];


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
  const [value, setValue] = useState([20, 1130]);
  const min = 0;
  const max = 1500;

  const leftPercent = ((value[0] - min) / (max - min)) * 100;
  const rightPercent = ((value[1] - min) / (max - min)) * 100;


  return (
    <div className='h-screen flex flex-col cursor-default'>
      <Navbar />
      <div className='relative'>
        <div className='sticky top-0 flex gap-4 px-[1.5rem] py-[1rem] py-4 bg-secondary-100'>
          {
            categories.map((oItem, oIndex) => (
              <div key={oIndex} className='rounded-2xl bg-gray-100/40 px-4 py-1 shadow text-sm font-medium backdrop-blur-md'> {oItem.title} </div>
            ))
          }
        </div>
        <div className='grid grid-cols-12 grow bg-secondary-100'>
          <div className='h-full col-span-2 p-[1.5rem] pt-0 pr-0'>
            <div className='h-full flex flex-col gap-4'>
              <FilterCard title='Price Range' subtitle="sdsdsds">
                <div className="relative h-24 mb-6">
                  {/* Chart (arka plan) */}
                  <div className="absolute inset-0 opacity-60 pointer-events-none">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={priceData}>
                        <defs>
                          <linearGradient id="layer1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.7} />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity={0.05} />
                          </linearGradient>

                          <linearGradient id="layer2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#c4b5fd" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0.02} />
                          </linearGradient>
                        </defs>
                        <Area
                          type="basis"
                          dataKey="v2"
                          fill="url(#layer2)"
                          stroke="none"
                          className="blur-[2px]"
                        />
                        <Area
                          type="basis"
                          dataKey="v1"
                          fill="url(#layer1)"
                          stroke="none"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  {/* Slider (ön plan) */}
                  <div className="absolute bottom-2 left-0 right-0 px-2">
                    <Slider
                      value={value}
                      onValueChange={setValue}
                      min={0}
                      max={1500}
                      step={10}
                      className="relative flex items-center w-full h-10"
                    >
                      <SliderTrack className="relative h-1 w-full rounded-full bg-gray-200">
                        <SliderRange className="absolute h-full rounded-full bg-purple-500" />
                      </SliderTrack>

                      <SliderThumb className="h-4 w-4 rounded-full bg-white border border-purple-500 shadow" />
                      <SliderThumb className="h-4 w-4 rounded-full bg-white border border-purple-500 shadow" />
                    </Slider>
                  </div>
                  <div className="relative h-8 mb-2">
                    <span
                      className="absolute -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-full"
                      style={{ left: `${leftPercent}%` }} >
                      ${value[0]}
                    </span>
                    <span
                      className="absolute -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-full"
                      style={{ left: `${rightPercent}%` }}>
                      ${value[1]}
                    </span>
                  </div>
                </div>
              </FilterCard>
              <FilterCard title='Start Rating'>
                <div className='flex gap-1'>
                  <Star
                    size={18}
                    weight="fill"
                    className='text-yellow-300'
                  />
                </div>
              </FilterCard>
              <div className="relative h-[calc(100vh-28rem)] rounded-2xl bg-white overflow-y-auto p-4 shadow">
                <div className="sticky top-0 font-semibold bg-white pb-2">Brand</div>
                <div className="flex flex-col gap-2 px-1">
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
            </div>
          </div>
          <div className="col-span-10">
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Layout