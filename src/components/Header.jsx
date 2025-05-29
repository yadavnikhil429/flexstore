import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../layouts/navbar";
import Footer from "../layouts/footer";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import Products from "../assets/products";

const Header =() =>{
     const [filteredProducts, setFilteredProducts] = useState(Products);
     const navigate = useNavigate();
     
     const handleSearch  = (searchTerm)=>{

        if (searchTerm){
            const searchResults = Products.filter((product)=> {
                return (
                    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchTerm.toLowerCase()))
                })

            setFilteredProducts(searchResults);
        } else {
            setFilteredProducts(Products);
        }
        
        navigate("/");

     };

    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50 ">
            <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
                           <p className="text-blue font-bold italic">FlexStore</p>
                       <SearchBar onSearch={handleSearch}/>
                       <NavBar />
            </div>
            </div>
            <main className="pt-40 px-4 md:px-10 lg:px-20">
              <Outlet context={{ filteredProducts }}/>
            </main>
            <Footer />
            </div>
    )
};

export default Header;