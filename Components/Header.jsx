import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header">
                <nav className="navigation">
                    <button > <Link to='/'>Home</Link></button>
                    <button ><Link to="/staffdetails">Staff Details</Link></button>
                </nav>
            </header>
        </>
    );
}

export default Header;
