import Products from "../assets/products";
import Card from "../components/Card";
import { useState } from "react";
import { useNavigate, useOutletContext} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NavBar from "../layouts/navbar";


const Home = () => {

    const { filteredProducts} = useOutletContext();

    return (
        <div>
            <p className="text-xl font-semibold">Products</p>

            <div className="grid grid-cols-3 sm:grid-colos-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) =>
                    <Card
                        key={product.id}
                        product={product}
                    />
                )}

            </div>

        </div>)
}

export default Home;