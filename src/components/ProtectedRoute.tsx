import { ElementType } from 'react'
import { Redirect, Route } from 'react-router'

type propsType = {
  user: string
  component: ElementType
  path: string
}

export const ProtectedRoute = ({
  user,
  component: Component,
  path,
}: propsType) => {
  return (
    <Route
      path={path}
      render={props => {
        if (user) return <Component {...props} />
        if (!user)
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
      }}
    />
  )
}
