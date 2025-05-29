import { useState } from 'react';

const SearchBar = ({onSearch})=>{
    const [searchTerm, setSearchTerm] = useState('');
         
    const handleSubmit = (e)=> {
        e.preventDefault();
        if(onSearch) {
            onSearch(searchTerm);
        }
    }

    return (
    <div className="flex items-center justify-center my-4">

            <form onSubmit={handleSubmit} className="flex items-center w-full max-w-md">
               <input 
               type="text"
                placeholder="Search products..."    

                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded px-2 py-2 m-2 w-full"
               />
               <button
                type="submit"
className="bg-[var(--color-tirtiary)] text-white px-4 py-2 rounded-lg shaow hover:bg-blue-700 transition duration-300"               >search</button>
            </form>   
       </div>
    )
};

export default SearchBar;