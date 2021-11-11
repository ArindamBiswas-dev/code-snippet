import axios from 'axios'
import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { useAppDispatch } from '../../app/hook'
import { setUserId } from '../../features/userSlice'

export const Logout = () => {
  const dispatch = useAppDispatch()

  const [loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    axios
      .get('http://localhost:5000/auth/logout', { withCredentials: true })
      .then(() => {
        console.log('logged out')
        dispatch(setUserId(''))
      })
      .catch(err => {
        console.log(err)
        dispatch(setUserId(''))
      })

    setloading(false)
  }, [])

  if (loading) return <div></div>
  else return <Redirect to="/" />
}
