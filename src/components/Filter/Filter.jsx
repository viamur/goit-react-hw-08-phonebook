import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, title, handleChangeInput }) => {
  return (
    <>
      <p className={s.title}>{title}</p>
      <input
        type="text"
        placeholder="Enter name"
        className={s.input}
        name="filter"
        value={value}
        onChange={handleChangeInput}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChangeInput: PropTypes.func.isRequired,
};
