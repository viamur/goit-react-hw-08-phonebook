import s from './SecondBox.module.css';

const SecondBox = ({ children, title }) => {
  return <div className={s.box}>{children}</div>;
};

export default SecondBox;
