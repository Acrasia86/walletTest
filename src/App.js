import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import AddCard from './pages/AddCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Route exact path="/" render={(props) => <Home {...props}/> }/>
        <Route path="/addCard" render={(props) => <AddCard {...props}/> }/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
