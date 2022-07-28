import PropTypes from 'prop-types';

const Filter = ({ title, handleChangeInput }) => {
  return (
    <>
      <p>{title}</p>
      <input type="text" name="filter" onChange={handleChangeInput} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};
