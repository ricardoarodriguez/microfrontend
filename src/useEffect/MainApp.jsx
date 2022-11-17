import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { NavBar } from './NavBar';

export const MainApp = () => {
    return(
        <>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={ <HomePage />}/>
                <Route path="marketplace"  />
                <Route path="checkout" />
                <Route path="login" />
                <Route path="descriptionProduct"  />
                <Route path="core" />
                <Route path="/*" element={ <Navigate to="/" />}/>
            </Routes>
        </>
    ); 
}