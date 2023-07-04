import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import UserLogin from "./components/Login/UserLogin";
import Home from "./components/Home/Home";
import Authentication from "./components/Authentication/Authentication";

const App = () => {
    return (
        <Router>
            <Authentication>
                <Switch>
                    <Route path="/" exact component={UserLogin}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </Authentication>
        </Router>
    );
}

export default App;
