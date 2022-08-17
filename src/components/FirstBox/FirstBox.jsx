import s from './FirstBox.module.css';

const FirstBox = ({ children }) => {
  return <div className={s.firstBox}>{children}</div>;
};

export default FirstBox;
