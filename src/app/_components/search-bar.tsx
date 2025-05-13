// "use client"

// import { Button } from '@/components/ui/button';
// import { MdFilterList } from "react-icons/md";
// import React from 'react';
// import { CiSearch } from "react-icons/ci";

// function Search() {
//     return (
//         <div className="flex h-[40px] mt-5 mb-5 ml-4 mr-4 md:ml-10 md:mr-10">
//             <div className="flex items-center border border-[#E4E4E7] rounded-md h-[40px] px-3.5 w-full">
//                 <CiSearch className="text-[#71717A] mr-1.5 text-base h-4 w-4" />
//                 <input
//                     type="text"
//                     placeholder="Buscar..."
//                     className="outline-none w-full bg-transparent placeholder:text-[#71717A] placeholder:text-sm"
//                 />
//             </div>

//             <Button
//                 className="ml-2 rounded-full bg-transparent border border-[#e4e4e7] text-[#18181B] w-[40px] h-[40px]"
//                 size="icon"
//             >
//                 <MdFilterList />
//             </Button>
//         </div>
//     );
// }

// export default Search;

"use client";

import { Button } from '@/components/ui/button';
import { MdFilterList } from "react-icons/md";
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

type SearchProps = {
    onSearch: (query: string) => void;
};

function Search({ onSearch }: SearchProps) {
    const [query, setQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);  // Passa o valor para o componente pai
    };

    return (
        <div className="flex h-[40px] mt-5 mb-5 ml-4 mr-4 md:ml-10 md:mr-10">
            <div className="flex items-center border border-[#E4E4E7] rounded-md h-[40px] px-3.5 w-full">
                <CiSearch className="text-[#71717A] mr-1.5 text-base h-4 w-4" />
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Buscar..."
                    className="outline-none w-full bg-transparent placeholder:text-[#71717A] placeholder:text-sm"
                />
            </div>

            <Button
                className="ml-2 rounded-full bg-transparent border border-[#e4e4e7] text-[#18181B] w-[40px] h-[40px]"
                size="icon"
            >
                <MdFilterList />
            </Button>
        </div>
    );
}

export default Search;
