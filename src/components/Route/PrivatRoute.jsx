import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateToken } from '../../redux/user/userSelector';

const PrivateRoute = ({ component: Component, nav, ...props }) => {
  const isAuth = useSelector(getStateToken);
  return isAuth ? <Component {...props} /> : <Navigate to={nav} />;
};
export default PrivateRoute;
