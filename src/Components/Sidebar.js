import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Sidebar = (props) => {
  
    const dispatch = useDispatch();
    
    const logoutHandler = ()  => {        
        localStorage.removeItem('isLoggedIn');
        dispatch({type: 'logout', value: []});
    }

  return (
      <div className="flex-shrink-0 p-3 bg-light" style={{width: "200px"}}>        
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              Home
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Link to="/" className="link-dark rounded">Overview</Link></li>
                <li><Link to="/" className="link-dark rounded">Updates</Link></li>
                <li><Link to="/" className="link-dark rounded">Reports</Link></li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              Dashboard
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Link to="/" className="link-dark rounded">Overview</Link></li>
                <li><Link to="/" className="link-dark rounded">Weekly</Link></li>
                <li><Link to="/" className="link-dark rounded">Monthly</Link></li>
                <li><Link to="/" className="link-dark rounded">Annually</Link></li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              Orders
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Link to="/" className="link-dark rounded">New</Link></li>
                <li><Link to="/" className="link-dark rounded">Processed</Link></li>
                <li><Link to="/" className="link-dark rounded">Shipped</Link></li>
                <li><Link to="/" className="link-dark rounded">Returned</Link></li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
              Account
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">                
                <li><Link to="#" onClick={logoutHandler} className="link-dark rounded">Sign out</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
}

export default Sidebar;