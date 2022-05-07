import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import AllData from './components/AllData/AllData';
import AddData from './components/AddData/AddData';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/allData">
            <AllData/>
          </Route>
          <Route path="/addData">
            <AddData/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
