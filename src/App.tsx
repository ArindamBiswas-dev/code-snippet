import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { Add } from './pages/AddSnippets/Add'
import { Home } from './pages/Home/Home'
import { Snippet } from './pages/Snippets/Snippet'
import { ViewSnippet } from './pages/ViewSnippet/ViewSnippet'

function App() {
  return (
    <div className="App bg-gray-900 text-white">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/snippets">
              <Snippet />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/:id">
              <ViewSnippet />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App
