import { useState } from 'react'
import { LogInContent } from './LogInContent'
import { LogOutContent } from './LogOutContent'

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return <div>{isLoggedIn ? <LogInContent /> : <LogOutContent />}</div>
}
