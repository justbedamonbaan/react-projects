import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar  () {
    return(
        <nav className="navbar">
            <div className="navbarContainer">
                <ul className="navLinks">
                    <li className="links"><NavLink to="/" className="link">Home</NavLink></li>
                    <li className="links"><NavLink to="counter" className="link">Counter</NavLink></li>
                    <li className="links"><NavLink to="tictactoe" className="link borderRight">Tic Tac Toe</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar; 