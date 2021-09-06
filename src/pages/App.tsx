import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import AddUser from "./AddUser";
import UserList from "./Home";
import UserDetail from "./UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/adduser" exact component={AddUser} />
        <Route path="/users/:id" exact component={UserDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
