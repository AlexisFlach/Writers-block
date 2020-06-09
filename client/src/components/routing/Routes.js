import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alert from "../layout/Alert";
import NotFound from "../layout/NotFound";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "../routing/PrivateRoute";
import Register from "../auth/Register";
import CreateProfile from "../profile-form/CreateProfile";
import EditProfile from "../profile-form/EditProfile";
import Profiles from "../profiles/Profiles";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import Profile from "../profile/Profile";

const Routes = () => {
  return (
    <div>
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/posts" component={Posts} />

          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute exact path="/posts/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </section>
      ;
    </div>
  );
};

export default Routes;
