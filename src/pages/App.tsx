import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import AddUser from "./AddUser";
import Home from "./Home";

import UserDetail from "./user-details";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/adduser" exact component={AddUser} />
        <Route path="/users/:id" exact component={UserDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
