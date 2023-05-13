import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../../components/Form/Form';
import ContactList from '../../components/Contacts/ContactList';
import Filter from '../../components/Filter/Filter';
import Section from '../../components/Section/Section';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { selectContacts } from 'redux/contacts/selectors';
// import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import css from './Phonebook.module.css';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  // const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>New contact</title>
      </Helmet>
      <div className={css.sectionWrapper}>
        <div>
          <Section title="Phonebook">
            {/* {isLoading && !error && <span> Loading...</span>} */}
            <ContactForm />
          </Section>
        </div>
        <div>
          <Section title="Contacts">
            <Filter />
            <ContactList />
            <ToastContainer />
          </Section>
        </div>
      </div>
    </>
  );
};

export default PhonebookPage;
