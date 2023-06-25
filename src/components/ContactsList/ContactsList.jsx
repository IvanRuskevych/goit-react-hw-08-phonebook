import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { selectFilteredContacts } from 'redux/selectors';
import Contact from 'components/Contact/Contact';

import css from './ContactsList.module.css';

function ContactsList() {
  const list = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {list.map(contact => {
        return <Contact item={contact} key={nanoid(5)} />;
      })}
    </ul>
  );
}

export default ContactsList;
