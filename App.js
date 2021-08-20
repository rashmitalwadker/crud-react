import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Exact, Route } from 'react-router-dom';
//import Products from './component/Products';
import Home from './component/Home';
import Gallery from './component/Gallery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( < >


        <
        Router >
        <
        Navbar / >
        <
        Switch > <
        Route path = '/Home'
        component = { Home }
        /> <
        Route path = '/Gallery'
        component = { Gallery }
        /> <
        /Switch>

        <
        /
        Router > <
        / >
    );
}

export default App;