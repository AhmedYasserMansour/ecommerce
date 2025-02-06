import { useAppSelector } from "@/store/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children} : {children : React.ReactNode}) => {
     const {user} = useAppSelector((state) => state.auth);
     if(!user) {
      return <Navigate to='/login?message=login_required'/>
     }
  return (
    <>{children}</>
  )
}

export default ProtectedRoute
