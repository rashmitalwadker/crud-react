import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, to } from 'react-router-dom';


const Navbar = () => {
        return ( <
            div >
            <
            nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
            <
            div className = "container-fluid" >
            <
            Link className = "navbar-brand"
            to = "#" > Ecomm Site < /Link> <
            button className = "navbar-toggler"
            type = "button"
            data bs toggle = "collapse"
            data bs target = "#navbarSupportedContent"
            aria controls = "navbarSupportedContent"
            aria expanded = "false"
            aria label = "Toggle navigation" >
            <
            span className = "navbar-toggler-icon" > < /span> < /
            button > <
            div className = "collapse navbar-collapse"
            id = "navbarSupportedContent" >
            <
            ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
            <
            li className = "nav-item" >
            <
            Link className = "nav-link active"
            aria current = "page"
            to = "/" > Ecomm site < /Link> < /
            li > <
            li className = "nav-item" >
            <
            Link className = "nav-link"
            to = "/Home" > Home < /Link> < /
            li > <
            li className = "nav-item dropdown" >
            <
            Link className = "nav-link dropdown-toggle"
            to = "/Gallery"
            id = "navbarDropdown"
            role = "button"
            data bs toggle = "dropdown"
            aria expanded = "false" >
            Gallery <
            /Link> <
            ul className = "dropdown-menu"
            aria labelledby = "navbarDropdown" >
            <
            li > < Link className = "dropdown-item"
            to = "#" > Action < /Link></li >
            <
            li > < Link className = "dropdown-item"
            to = "#" > Another action < /Link></li >
            <
            li > < hr class = "dropdown-divider" / > < /li > <
            li > < Link className = "dropdown-item"
            to = "#" > Something
            else here < /Link></li >
                <
                /ul> < /
            li >
            <
            /ul> <
            form className = "d-flex" >
            <
            input className = "form-control me-2"
            type = "search"
            placeholder = "Search"
            aria label = "Search" / >
            <
            button className = "btn btn-outline-success"
            type = "submit" > Search < /button> < /
            form > <
            /div> < /
            div > <
            /nav>




            <
            /div>);

        }
        export default Navbar;