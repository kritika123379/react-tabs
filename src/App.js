import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import SimpleTab from './components/simpleTab';
import Complicated from "./components/Complicated";
import Modal from "./components/ModalView";
import Closable from "./components/Closable";
import AsyncTab from "./components/AsyncTab";
import Draggable from "./components/Draggable";
import IconTab from "./components/IconTab";

function App() {
  return (
    <Router>
      <header>
        <h2 className="logo">React app</h2>
        <img src={logo} alt="img" width="40px" height="40px"/>
        <nav>
          <NavLink to="/" exact className="nav" activeClassName="nav-active">
            Home
          </NavLink>
          <NavLink to="/channels" className="nav" activeClassName="nav-active">
            Channels
          </NavLink>
          <NavLink to="/events" className="nav" activeClassName="nav-active">
            Events
          </NavLink>
          <NavLink to="/simple" className="nav" activeClassName="nav-active">
            Simple
          </NavLink>
         <NavLink to="/drag" className="nav" activeClassName="nav-active">
            Draggable
          </NavLink>
         <NavLink to="/icon" className="nav" activeClassName="nav-active">
            IconTab
          </NavLink>
          <NavLink to="/modal" className="nav" activeClassName="nav-active">
            Modal
          </NavLink>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Complicated} />
        <Route path="/channels" component={Closable} />
        <Route path="/events" render={props => <AsyncTab {...props} />} />
        <Route path="/simple" render={props => <SimpleTab {...props} />} />
        <Route path="/drag" render={props => <Draggable {...props} />} />
        <Route path="/icon" render={props => <IconTab {...props} />} />
        <Route path="/modal" render={props => <Modal {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
