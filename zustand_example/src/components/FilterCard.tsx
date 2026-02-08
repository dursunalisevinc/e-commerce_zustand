import React from 'react'

interface FilterCardProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}
const FilterCard = ({ title, subtitle, children }: FilterCardProps) => {
    return (
        <div className='rounded-2xl bg-white p-4 shadow'>
            <div className='font-semibold'> {title} </div>
            <div className='text-xs text-secondary-400'> {subtitle} </div>
            {children}
        </div>
    )
}

export default FilterCard