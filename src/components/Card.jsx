import { useNavigate} from 'react-router-dom';

const Card = ({product})=>{

    const navigate = useNavigate();

    
    const {id, name, description, price, imageUrl} = product;

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };


    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <div onClick = {handleClick} >
            <img src={imageUrl[0]} alt={name} className="rounded-lg mb-4"/>
            <h2 className="text-lg font-semibold">{name}</h2>
            <h4 className="text-gray-600 font-semibold">{price} $</h4>
            
            <button className="bg-[var(--color-tirtiary)] text-white px-4 py-2 rounded-lg shaow hover:bg-blue-700 transition duration-300" onClick = {handleClick}>Quick view</button>
            </div>
            </div>
    );
};

export default Card;


/* if you want to use link instead of navigate
import { Link } from 'react-router-dom'; 
<Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>${price}</p>
      </Link>   */