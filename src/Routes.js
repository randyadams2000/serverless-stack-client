import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Record from "./containers/Record";
import Settings from "./containers/Settings";
import Prompts from "./containers/Prompts";
import Simulate from "./containers/Simulate";
import Showvideo from "./containers/Showvideo"
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
<UnauthenticatedRoute exact path="/login">
  <Login />
</UnauthenticatedRoute>
<UnauthenticatedRoute exact path="/signup">
  <Signup />
</UnauthenticatedRoute>
<AuthenticatedRoute exact path="/settings">
  <Settings />
</AuthenticatedRoute>
<AuthenticatedRoute exact path="/notes/new">
  <NewNote />
</AuthenticatedRoute>
<AuthenticatedRoute exact path="/notes/:id">
  <Notes />
</AuthenticatedRoute>
<AuthenticatedRoute exact path="/record">
  <Record /> 
</AuthenticatedRoute>
<AuthenticatedRoute exact path="/prompts">
  <Prompts /> 
</AuthenticatedRoute>
<AuthenticatedRoute exact path="/simulate">
  <Simulate /> 
</AuthenticatedRoute>
<AuthenticatedRoute exact path="/showvideo/:id">
  <Showvideo /> 
</AuthenticatedRoute>
      {/* Finally, catch all unmatched routes */}
	<Route>
	  <NotFound />
	</Route>
    </Switch>
  );
}
