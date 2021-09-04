import React from "react";
import AddUser from "../containers/add-user";
import UserList from "../containers/usere-list";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import UpdateUser from "./../containers/update-user";
import UserDetail from "../containers/user-detail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/adduser" exact component={AddUser} />
        <Route path="/updateuser/:id" exact component={UpdateUser} />
        <Route path="/users/:id" exact component={UserDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
