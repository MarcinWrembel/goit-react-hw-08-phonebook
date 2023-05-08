import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {

  const stateContacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  //create filtered array
  const filteredContacts = stateContacts.contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filterValue.filter.toLowerCase()) ||
      contact.phone.includes(filterValue.filter)
    );
  });

  const handledDelete = id => {
    dispatch(deleteContact(id));
  };

  const liItems = filteredContacts === [] ? "" : filteredContacts.map(item => {
    return (
      <li key={item.id} id={item.id} className={css.contactListItem}>
        {item.name}: {item.phone}
        <button
          onClick={() => handledDelete(item.id)}
          className={css.btnDelete}
        >
          Delete
        </button>
      </li>
    );
  });

  return liItems.length > 0 ? <ul className={css.contactList}>{liItems}</ul> : "";
};

ContactList.propTypes = {
  liItems: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
