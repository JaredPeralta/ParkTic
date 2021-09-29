import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Registro from "./Registro/pages/Registro";
import Listar from "./Listar/pages/Listar";
import Error from "./Shared/pages/Error"



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Registro />
        </Route>
        <Route path="/Listar" exact>
          <Listar />
        </Route>
        <Route path="/Error" exact>
          <Error />
        </Route>
        <Redirect to="/Error"/>
      </Switch>
    </Router>
  );
};

export default App;
