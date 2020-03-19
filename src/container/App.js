import React from "react";
import { Route, Switch } from "react-router-dom";
import DevicePage from "../pages/DevicePage";
import ListDevicePage from "../pages/ListDevicePage";
import * as apiCalls from "../api/apiCalls";
import UpdatePage from "../pages/UpdatePage";


function App() {
  return (
    <div>
      <div className="container">
        <Switch>
          
          <Route exact path="/" component={DevicePage} />
          <Route  path="/list" component={ListDevicePage} />
          <Route exact path="/update/:id" component={UpdatePage} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
