import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import NextContent from "./pages/NextContent";
import PreviousContent from "./pages/PreviousContent";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
    return (
        <Router>
            <Navbar />
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route path="/previouscontent">
                        <PreviousContent />
                    </Route>
                    <Route path="/nextcontent">
                        <NextContent />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/">
                        <h1>Pagina niet gevonden</h1>
                    </Route>
                </Switch>
        </Router>
    );
}
