import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Component/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../Component/Loading';
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <Loading/>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;