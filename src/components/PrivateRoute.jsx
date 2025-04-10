import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";

function PrivateRoute({children}) {

    const {user, Loading} = useContext(AuthContext)
    const location = useLocation();

    if(Loading){
        return <div>Loading....</div>
    }

    if(!user?.email){
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
  return children;
}

export default PrivateRoute
