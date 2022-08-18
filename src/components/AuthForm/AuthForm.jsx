import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk, registerUserThunk } from 'redux/user/userOperations';
import { Link, useLocation } from 'react-router-dom';
import { getStateToken } from 'redux/user/userSelector';

const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation().pathname;

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const input = e.target;

    input.name === 'name' && setName(input.value);
    input.name === 'email' && setEmail(input.value);
    input.name === 'password' && setPassword(input.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (location === '/register') {
      if (name === '' || email === '' || password === '') return;
      dispatch(registerUserThunk({ name, email, password }));
    }

    if (location === '/login') {
      if (email === '' || password === '') return;
      dispatch(loginUserThunk({ email, password }));
    }
  };

  return (
    <>
      <h2>{location === '/login' ? 'Sign in' : 'Sign up'}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        {location === '/register' && (
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChangeInput}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChangeInput}
          minLength={7}
        />
        <button type="submit">{location === '/register' ? 'Register' : 'Login'}</button>
      </form>
      {location === '/login' ? (
        <div>
          <p>Don't have an account?</p>
          <Link to="/register">Sign up</Link>
        </div>
      ) : (
        <div>
          <p>Do you have an account?</p>
          <Link to="/login">Sign in</Link>
        </div>
      )}
    </>
  );
};
export default AuthForm;

{
  /* <ThemeProvider theme={theme}>
  <TextField id="standard-basic" label="Standard" variant="standard" />
</ThemeProvider> */
}

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: 'red',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });
