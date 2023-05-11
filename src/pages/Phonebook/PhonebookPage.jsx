import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../../components/Form/Form';
import ContactList from '../../components/Contacts/ContactList';
import Filter from '../../components/Filter/Filter';
import Section from '../../components/Section/Section';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Section title="Phonebook">
        {isLoading && !error && <h1> Loading...</h1>}
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
        <ToastContainer />
      </Section>
    </>
  );
};

export default PhonebookPage;
