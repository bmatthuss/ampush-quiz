import logo from './logo.svg';
import './App.css';
import Start from './components/Start';
import Quiz from './components/Quiz';
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="root">
      <Router history={history}>
        <Switch>
          {/* <Start /> */}
          <Route exact path="/start">
            <Start />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route path="*">
            <Start />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
