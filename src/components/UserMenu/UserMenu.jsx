import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/user/userOperations';
import { getStateEmail, getStateToken } from 'redux/user/userSelector';
import img3 from '../../img/3.png';
import img1 from '../../img/1.png';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(getStateEmail);
  const token = useSelector(getStateToken);
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <p className={s.email}>{email ? email : 'Hello Guest!'}</p>
      {token && (
        <button type="button" className={s.btn} onClick={() => dispatch(logoutUserThunk())}>
          Logout
        </button>
      )}
      <a href="https://github.com/viamur" target="_blank" rel="noreferrer" className={s.link}>
        <img src={token ? img1 : img3} alt="avatar" className={s.img} width={30} height={30} />
      </a>
    </div>
  );
};

export default UserMenu;
