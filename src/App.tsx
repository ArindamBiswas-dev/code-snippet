import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { useAppSelector } from './app/hook'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Add } from './pages/AddSnippets/Add'
import { Home } from './pages/Home/Home'
import { Snippet } from './pages/Snippets/Snippet'
import { ViewSnippet } from './pages/ViewSnippet/ViewSnippet'

function App() {
  const userId = useAppSelector(state => state.user.id)

  return (
    <div className="App bg-gray-900 text-white">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <ProtectedRoute
              user={userId}
              component={Snippet}
              path="/snippets"
            />
            <ProtectedRoute user={userId} component={Add} path="/add" />
            <ProtectedRoute user={userId} component={ViewSnippet} path="/:id" />
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App
