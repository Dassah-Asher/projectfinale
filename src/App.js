import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddResult from "./screens/AddResult";
import Results from "./screens/Results";
import Header from "./components/Header";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";
import "./bootstrap.min.css"

function App() {
  return (
    <main>
      <Header />
      <>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/results" component={Results} />
          <Route path="/addresult" component={AddResult} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterUserScreen} />
        </Switch>
      </>
    </main>
  );
}

export default App;
