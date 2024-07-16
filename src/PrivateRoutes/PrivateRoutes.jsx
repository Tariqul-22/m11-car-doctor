import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { ClockLoader } from "react-spinners";
import useAuth from "../Hocks/useAuth";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
    // console.log(location);

    if (loading) {
        return  <ClockLoader
        className="mx-auto my-10"
        color="#36d7b7"
        cssOverride={{}}
        loading
        size={60}
        speedMultiplier={2}
      />
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>

};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;