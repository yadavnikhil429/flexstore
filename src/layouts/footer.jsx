const Footer = ()=> {
    return (
        <div>
            <footer className="bg-blue-200 text-black font-semibold py-4 shadow-md mt-8">
                <div className="container mx-auto text-center">
                    <p className="text-sm">© {new Date().getFullYear()} FlexStore. All rights reserved.</p>
                    <p className="text-sm">Follow us on 
                        <a href="https://twitter.com" className="text-blue-400 hover:underline ml-1">Twitter</a>, 
                        <a href="https://facebook.com" className="text-blue-400 hover:underline ml-1">Facebook</a>, 
                        <a href="https://instagram.com" className="text-blue-400 hover:underline ml-1">Instagram</a>
                    </p>
                </div>

            </footer>
        </div>
    )
};

export default Footer;