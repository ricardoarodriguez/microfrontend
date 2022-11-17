import { Link, NavLink } from 'react-router-dom';

export const NavBar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Inicio</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <NavLink 
                                className={ ( ({isActive}) => `nav-link ${ isActive ? 'active' : '' }` )}                              
                                to="marketplace">
                                MarketPlace
                            </NavLink>

                            <NavLink 
                                className={ ( ({isActive}) => `nav-link ${ isActive ? 'active' : '' }` )}                              
                                to="checkout">
                                Checkout
                            </NavLink>

                            <NavLink 
                                className={ ( ({isActive}) => `nav-link ${ isActive ? 'active' : '' }` )}                              
                                to="login">
                                Login
                            </NavLink>

                            <NavLink 
                                className={ ( ({isActive}) => `nav-link ${ isActive ? 'active' : '' }` )}                              
                                to="descriptionProduct">
                                Descripcion Productos
                            </NavLink>

                            <NavLink 
                                className={ ( ({isActive}) => `nav-link ${ isActive ? 'active' : '' }` )}                              
                                to="core">
                                Core Imperial
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}