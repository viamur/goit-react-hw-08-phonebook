import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/user/userOperations';
import { getStateEmail } from 'redux/user/userSelector';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(getStateEmail);
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <p className={s.email}>{email ? email : 'Hello Guest!'}</p>
      {email && (
        <button type="button" className={s.btn} onClick={() => dispatch(logoutUserThunk())}>
          Logout
        </button>
      )}
      <a href="https://github.com/viamur" target="_blank">
        {email ? (
          <img
            src="https://pngimg.com/uploads/github/github_PNG82.png"
            alt="avatar"
            className={s.img}
            width={30}
            height={30}
          />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="avatar"
            className={s.img}
            width={30}
            height={30}
          />
        )}
      </a>
    </div>
  );
};

export default UserMenu;
