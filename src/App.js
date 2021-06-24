import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MoviesList}/>
          <Route exact path="/details" component={MovieDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
