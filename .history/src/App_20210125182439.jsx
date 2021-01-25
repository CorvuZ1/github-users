import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert alert={{text:"Test alert"}}/>
            <Switch>
              <Route path="/github-users" exact component={Home}/>
              <Route path="/github-users/about" component={About}/>
              <Route path="/github-users/profile/:name" component={Profile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App

// Hooks 14