import { useAppSelector } from '../../app/hook'
import { LogInContent } from './LogInContent'
import { LogOutContent } from './LogOutContent'

export const Home = () => {
  const userId = useAppSelector(state => state.user.id)

  return <div>{userId ? <LogInContent /> : <LogOutContent />}</div>
}
