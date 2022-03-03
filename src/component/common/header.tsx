import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SmoothMotion from './SmoothMotion';

const Header:React.FC = (props) => {
    let navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand p-2 h1" onClick={()=>navigate('/')}>User Records</span>
            </nav>
            <SmoothMotion>
                <Outlet />
            </SmoothMotion>
        </div>
    );
}

export default Header;