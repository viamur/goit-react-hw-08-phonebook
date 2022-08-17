import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={s.container}>
      <p className={s.email}>Hello Guest!</p>

      <button type="button" className={s.btn}>
        Logout
      </button>
      <a href="https://github.com/viamur" target="_blank">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="avatar"
          className={s.img}
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};

export default UserMenu;
