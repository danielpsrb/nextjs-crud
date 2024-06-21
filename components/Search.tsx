import React from 'react'
import { IoSearch } from 'react-icons/io5'

const Search = () => {
    return (
        <div className='relative flex flex-1'>
            <input type="text" placeholder="Search..." className="input input-bordered w-full" />
            <IoSearch className='absolute right-3 top-3.5 w-5 h-5 text-gray-400' />
        </div>
    )
}

export default Search