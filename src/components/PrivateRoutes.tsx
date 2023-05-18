import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { RootState } from '../store'
export const PrivateRoutes = () => {
    const logged = useSelector((state: RootState) => state.login.logged)
    return (
        logged ? <Outlet /> : <Navigate to={'/login'} />
    )
}
