import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, clearCart } from "../redux/cartSlice";
import NavBar from "../layouts/navbar";
import SearchBar from "../components/SearchBar";



const Cart = ()=> {
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const totalQuantity = useSelector((state)=> state.cart.totalQuantity);
    const totalAmount = useSelector((state)=> state.cart.totalAmount);

    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrementQuantity = (id) => {
        dispatch(incrementQuantity(id));
    };

    return (
        <div className="w-screen min-h-screen px-6 py-10" >
            <h1 className="font-semibold">Cart</h1>

            
            {cartItems.length === 0 && 
            <h2 className="text-xl font-medium text-gray-600">Your cart is empty</h2>}
             
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {cartItems.map(item => {
                return (  
                    <div classame="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col items-center"
                    key={item.id}>
                            <div className="flex flex-cols justify-between gap-4">
                        <img src={item.imageUrl[0]} alt={item.name} style={{width: 80, height: 120}} />
                         <div>
                        <h2 className ="font-bold text-lg">{item.name}</h2>
                        <p className = "font-semibold">price: ${item.price}</p>
                        <button className="px-2 py-0.3 bg-gray-400 text-white rounded hover:bg-gray-500" 
                        onClick={()=>handleIncrementQuantity(item.id)}>+</button>

                        <p className="font-semibold">Quantity: {item.quantity}</p>

                        <button className="px-2.5 py-0.8 bg-gray-400 text-white rounded hover:bg-gray-500"
                         onClick={() => handleRemoveFromCart(item.id)}>-</button>
                         </div>
                         </div>
                    </div>
                )
            })}</div>



            <div className="bg-white shadow-md rounded-lg p-4 mt-6 max-w-md mx-auto"> 
            <h2 className=" text-xl font-semibold mb-2 text-[var(--color-accent)]">Summary</h2>
            <h2 className="font-semibold">Total Quantity: {totalQuantity}</h2>
            <h2 className="font-semibold">Total Amount: ${totalAmount.toFixed(2)}</h2>
            </div>

            <div className="flex justify-between gap-6 mt-6">
            <button className="bg-[var(--color-tirtiary)] text-white px-6 py-2 rounded hover:bg-blue-700 transition" onClick={() => alert('Proceeding to checkout...')}>Checkout</button>
            <button className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500 transition" onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>

         </div>
    )
};

export default Cart;

  /* <div className="flex items-center justify-between px-6 py-4 ">
                <p className="text-blue font-bold italic">FlexStore</p>
            <SearchBar />
            <NavBar />
            </div>  */