
import s from './SecondBox.module.css';

const SecondBox = ({ children, title }) => {
  return (
    <div className={s.box}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
};

export default SecondBox;
