// import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import css from './Form.module.css';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  //on form Submit function
  const handleSubmit = e => {
    //prevent default form behaviour
    e.preventDefault();
    const form = e.currentTarget;

    const newContact = {
      name: form.name.value,
      number: form.number.value,
    };

    //check if contact exist in data
    let isContact = false;

    contacts.forEach(el => {
      if (el.name.toLowerCase() === newContact.name.toLowerCase()) {
        isContact = true;
        return;
      }
    });

    if (!isContact) {
      dispatch(addContact(newContact));
    } else {
      toast.warn('You cannot add the same name twice!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }

    //clear form
    form.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={css.formLabel}>
          Name
          <input
            className={css.formInput}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа]+(([' \-]?[a-zA-Zа ])?[a-zA-Zа]*)*$"       
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number" className={css.formLabel}>
          Number
          <input
            className={css.formInput}
            type="tel"
            id="number"
            name="number"
            // pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            // pattern="^[\+]?[(]?[0-9]{3}[)]?[\-\.]?[0-9]{2,3}[\-\.]?[0-9]{4,6}$"
            pattern="^[\+]?[\(]?[0-9]{3}[\)]?[\-\s\.]?[0-9]{2,3}[\-\s\.]?[0-9]{4,6}$"

            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.btnAdd}>
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
};

export default ContactForm;
