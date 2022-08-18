import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateToken } from '../../redux/user/userSelector';

const PublicRoute = ({ component: Component, nav, restricted = false, ...props }) => {
  const isAuth = useSelector(getStateToken);
  console.log(nav);

  return isAuth && restricted ? <Navigate to={nav} /> : <Component {...props} />;
};

export default PublicRoute;
