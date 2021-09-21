import Sidebar from "./Sidebar";
import Header from "./Header";
import { Fragment } from "react";

const Layout = (props) => {
    
    return (   
        <Fragment>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <Sidebar />
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </Fragment>
    );
}

export default Layout;