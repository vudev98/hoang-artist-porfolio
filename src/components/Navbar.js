import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Collection from './Collection';
import Exhibition from './Exhibition';
import About from './About';
import Contact from './Contact';

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo'>
                            Hoang Artist
                        </Link>
                    </div>
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
                    <hr />
                </nav>
                <Switch>
                    <Route path="/" component={Home} exact>
                        <Home />
                    </Route>
                    <Route path="/collection" component={Collection} exact>
                        <Collection />
                    </Route>
                    <Route path="/exhibition" component={Exhibition} exact>
                        <Exhibition />
                    </Route>
                    <Route path="/about" component={About} exact>
                        <About />
                    </Route>
                    <Route path="/contact" component={Contact} exact>
                        <Contact />
                    </Route>
                    <Route component={Error} />
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar
