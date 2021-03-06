import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import Home from './Home';
import Collection from './Collection';
import Exhibition from './Exhibition';
import About from './About';
import Contact from './Contact';

const Navbar = () => {
    return (
        <Router>
            <div className='navbar-list'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/collection'>My Collections</Link>
                    </li>
                    <li>
                        <Link to='/exhibition'>Exhibition</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path="/" component={Home} exact>
                </Route>
                <Route path="/collection" component={Collection} exact>
                </Route>
                <Route path="/exhibition" component={Exhibition} exact>
                </Route>
                <Route path="/about" component={About} exact>
                </Route>
                <Route path="/contact" component={Contact} exact>
                </Route>
                <Route component={Error} />
            </Switch>
        </Router >
    )
}

const Error = () => {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default Navbar
