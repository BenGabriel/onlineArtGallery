import "./App.css";
import Drawings from "./components/art/Drawings/Drawings";
import Paintings from "./components/art/Painting/Paintings";
import Photography from "./components/art/Photography/Photography";
import Sculpture from "./components/art/Sculpture/Sculpture";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import AddPost from "./components/Dashboard/AddPost";
import UpdateUser from "./components/Dashboard/UpdateUser";
import DashboardItem from "./components/Dashboard/DashboardItem";
import ArtistState from "./context/ArtistContext/ArtistState";
import AuthState from "./context/AuthContext/AuthState";
import ArtItem from "./components/art/ArtItem";
import ArtistProfile from "./components/art/ArtistProfile";
import PrivateRoute from "./components/routes/PrivateRoute";
// import ForgotPassword from "./components/auth/ForgotPassword";
// import Email from "./components/auth/Email";
import Redirect from "./components/Redirect";
import User from "./components/Dashboard/User";

function App() {
  return (
    <AuthState>
      <ArtistState>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/drawings" component={Drawings} />
              <Route path="/sculpture" component={Sculpture} />
              <Route path="/photography" component={Photography} />
              <Route path="/paintings" component={Paintings} />
              <Route path="/signup" component={Signup} />
              {/* <Route path="/enterEmail" component={Email} /> */}
              {/* <Route path="/resetPassword" component={ForgotPassword} /> */}
              <Route path="/art/:id" component={ArtItem} />
              <Route path="/artist/:id" component={ArtistProfile} />
              <PrivateRoute path="/redirect" component={Redirect} />
              <PrivateRoute path="/addpost" component={AddPost} />
              <PrivateRoute path="/updateuser" component={UpdateUser} />
              <PrivateRoute path="/user-profile" component={User} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute
                path="/dashboard/:id"
                exact
                component={DashboardItem}
              />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </ArtistState>
    </AuthState>
  );
}

export default App;
