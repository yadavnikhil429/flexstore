import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../assets/products"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import NavBar from "../layouts/navbar";
import SearchBar from "../components/SearchBar";

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();


    const product = products.find((product) => product.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(product.imageUrl[0])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (!product) {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        )
    }

    return (
        <div className="max-w-screen mx-auto px-4 py-10 min-h-screen flex flex-col md:flex-row gap-10">
                <div className="flex flex-col items-center  md:items-start mdw-1/2 gap-4">
                    <img src={selectedImage}
                        alt={product.name}
                        className="w-full max-w-md h-auto object-cover border rounded-md shadow" />

                    <div className="flex gap-4 mt-4">
                        {product.imageUrl.map((image, index) => {
                            return (
                                <img
                                    src={image}
                                    key={index}
                                    alt={`view ${index}`}
                                    onClick={() => setSelectedImage(image)} 
                                    className="w-16 h-20 object-cover border rounded cursor-pointer hover:ring-2[var(--color-accent)] transition" />
                            )
                        })}
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col justify-start gap-4">
                    <h1 className="text-3xl font-semibold mb-4 text-[var(--color-accent)]">{product.name}</h1>
                    <h2 className="text-xl font-bold mb-2">{product.price} $</h2>
                    <p className="mb-6 font-semibold">{product.description}</p>

                    <button className="bg-[var(--color-tirtiary)] text-white px-4 py-2 rounded-lg shaow hover:bg-blue-800 transition duration-300"
                        onClick={() => handleAddToCart(product)} >
                        Add to cart
                    </button>
                </div>
        </div>
    )
};

export default Product;