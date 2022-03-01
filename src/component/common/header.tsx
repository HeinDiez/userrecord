import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Header:React.FC = (props) => {
    let navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand ml-2 h1" onClick={()=>navigate('/')}>User Records</span>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;