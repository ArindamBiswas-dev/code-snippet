import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hook'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { setUserId } from './features/userSlice'
import { Add } from './pages/AddSnippets/Add'
import { Home } from './pages/Home/Home'
import { Snippet } from './pages/Snippets/Snippet'
import { ViewSnippet } from './pages/ViewSnippet/ViewSnippet'

// function checkUserLoggedIn() {
//   axios
//     .get('http://localhost:5000/auth/checkuser', { withCredentials: true })
//     .then(res => {
//       if (res.data.userEmail) {
//         console.log('user logged in ', res.data.userEmail)
//         return res.data.userEmail
//       } else return ''
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
//   return ''
// }

function App() {
  // const userEmail: string = checkUserLoggedIn()
  // console.log('first')
  const dispatch = useAppDispatch()
  const [loading, setloading] = useState(true)
  // dispatch(setUserId(userEmail))

  useEffect(() => {
    console.log('app component render')
    axios
      .get('http://localhost:5000/auth/checkuser', { withCredentials: true })
      .then(res => {
        if (res.data.userEmail) {
          console.log('user logged in ', res.data.userEmail)
          const userEmail = res.data.userEmail.toString()
          dispatch(setUserId(userEmail))
        }
      })
      .catch(err => {
        console.log(err.message)
        dispatch(setUserId(''))
      })
      .finally(() => {
        setloading(false)
      })
  }, [])

  const userId = useAppSelector(state => state.user.id)

  if (loading) return <div></div>

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
            {/* <ProtectedRoute user={userId} component={Logout} path="/logout" /> */}
            <ProtectedRoute user={userId} component={ViewSnippet} path="/:id" />
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App
