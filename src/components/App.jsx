import React, { useEffect } from 'react';
import ContactForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';


const App = () => {
const dispatch=useDispatch()
const {isLoading,error}=useSelector(selectContacts)

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <>
    <Section title="Phonebook">
    {isLoading && !error && <h1> Loading...</h1>}
    {error && <p>{error.message}</p>}
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

export default App;
