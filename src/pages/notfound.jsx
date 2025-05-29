import { Link } from "react-router-dom";
const NotFound = ()=> {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4">404-Page Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find what you  were looking for.</p>

            <Link to="/" >Back To Home</Link>
        </div>
    )
};

export default NotFound;