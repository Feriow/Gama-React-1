import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import Hello from "./Hello";
import Error404 from "./error";
import Form from "./Form";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/hello" component={Hello} />
        <Route path="/form" component={Form} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
