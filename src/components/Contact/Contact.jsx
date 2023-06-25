import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteContact } from 'redux/operations';

import css from './Contact.module.css';

function Contact({ item }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(item.id));

  return (
    <li className={css.item}>
      {`${item.name}: ${item.phone}`}
      <Button
        size="small"
        type="submit"
        onClick={handleDeleteContact}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </li>
  );
}

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Contact;
