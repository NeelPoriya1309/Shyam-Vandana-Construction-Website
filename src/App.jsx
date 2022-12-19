import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
