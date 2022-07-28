import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ title, handleChangeInput }) => {
  return (
    <>
      <p className={s.title}>{title}</p>
      <input
        type="text"
        placeholder="Enter name"
        className={s.input}
        name="filter"
        onChange={handleChangeInput}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};
