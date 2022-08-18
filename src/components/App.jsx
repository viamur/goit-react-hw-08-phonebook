import { useDispatch, useSelector } from 'react-redux';
import { getStateItems, getStateLoading } from 'redux/contacts/contactsSelector';
import { Route, Routes, Navigate } from 'react-router-dom';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import SharedLayout from './SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { getStateToken } from 'redux/user/userSelector';
import { getUserThunk } from 'redux/user/userOperations';
import PrivateRoute from './Route/PrivatRoute';
import PublicRoute from './Route/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getStateToken);

  useEffect(() => {
    if (token) {
      dispatch(getUserThunk());
    }
  }, []);

  return (
    <Routes>
      <Route
        path="register"
        element={<PublicRoute component={RegisterPage} nav="/contacts" restricted />}
      />
      <Route
        path="login"
        element={<PublicRoute component={LoginPage} nav="/contacts" restricted />}
      />
      <Route path="contacts" element={<PrivateRoute component={ContactsPage} nav="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
