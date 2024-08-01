import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li> <Link to='/' >Home</Link> </li>
                <li> <Link to='/mala-jope' >MalaJope</Link> </li>
                <li> <Link to='/montro' >Montro</Link> </li>
            </ul>
        </div>
    );
};

export default Navbar;