import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage";
import Login from "./pages/login/login";
import Browse from "./pages/browse/browse";

import "./App.scss";

function App(props) {
  const { isAuthenticated } = props;

  return (
    <Switch>
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/browse" /> : <HomePage />}
      </Route>
      <Route path="/login">
        {isAuthenticated ? <Redirect to="/browse" /> : <Login />}
      </Route>
      <Route path="/browse">
        {!isAuthenticated ? <Redirect to="/login" /> : <Browse />}
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
