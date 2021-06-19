import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Navbar.css'
import { UserContext } from '../../App';


const Navbar = () => {
    document.title ="Welcome - Enjoy Dhokdo Tickets";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    
    return (
        <div className="main-container">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}></UserContext.Provider>
            <div className="logo-container">
                <h1 className="logo-desing">DHokDo Tickets</h1>
            </div>
            <div className="nav-container">
                <ul className="navbar-desing">
                    <li className="nav-desing"><a href="/home">Home</a></li>
                    <li className="nav-desing"><a href="/destination">Destination</a></li>
                    <li className="nav-desing"><a href="/blog">Blog</a></li>
                    <li className="nav-desing"><a href="/contact">Contact</a></li>  
                    <Button className="btn-desing" variant="danger"><a href="/login">Login/Register</a></Button>
                    <li className="nav-desing"><a href="/contact">{loggedInUser.name}</a></li>
                </ul>                
            </div>
        </div>
    );
};

export default Navbar;