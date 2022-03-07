import {FaGithub, FaLaptop} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar bg-light navbar-light">
            <div className='container-fluid'>
                <a href="." className="navbar-brand text-danger">Covid 19 React application status</a>
                <div className="d-flex align-items-center">
                    <a href="https://amirhossein.info" className="me-3 text-reset"><FaLaptop/></a>
                    <a href="https://github.com/BlackIQ/React-Covid" className="me-3 text-reset"><FaGithub/></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;