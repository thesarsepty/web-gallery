import Home from './pages/Home'
import Detail from './pages/Detail'
import Liked from './pages/Liked'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App(){
  
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/details/:id">
            <Detail /> 
          </Route>
          <Route path="/liked">
            <Liked /> 
          </Route>
          <Route path="*">
            <h1 style={{textAlign: 'center'}}>404 Not Found</h1>
          </Route>
        </Switch>
      </Router>
   
    )
  
}

export default App;
