import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Item.css';
import { del } from 'redux/contactsSlice';

const ListItem = ({ name, value, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {value}
      <button type="button" onClick={() => dispatch(del(id))} className="btn">
        Delete
      </button>
    </li>
  );
};
export default ListItem;

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
