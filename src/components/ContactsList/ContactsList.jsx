import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { selectFilteredContacts } from 'redux/selectors';
import Contact from 'components/Contact/Contact';

function ContactsList() {
  const list = useSelector(selectFilteredContacts);

  return (
    <ul>
      {list.map(contact => {
        return <Contact item={contact} key={nanoid(5)} />;
      })}
    </ul>
  );
}

export default ContactsList;
