import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import Logo from '../jetstream.svg';
import { Fragment } from 'react';

const Header = (props) => {    

    return (
        <Fragment>
            <header className="navbar navbar-dark sticky-top bg-light flex-md-nowrap p-0 shadow">
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/"><img src={Logo} alt="JetStream" height="35px"/></Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                            
            </header>
        </Fragment>
    );
}

export default Header;