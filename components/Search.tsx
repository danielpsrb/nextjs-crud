"use client"
import React from 'react'
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { IoSearch } from 'react-icons/io5'

const Search = () => {

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleSearchButton = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");
        if (term) {
            params.set("query", term);
        }
        else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className='relative flex flex-1'>
            <input 
                type="text" 
                placeholder="Search..." 
                className="input input-bordered w-full" 
                onChange={(e) => handleSearchButton(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
            />
            <IoSearch className='absolute right-3 top-3.5 w-5 h-5 text-gray-400' />
        </div>
    )
}

export default Search