import FirstBox from '../components/FirstBox/FirstBox';
import SecondBox from '../components/SecondBox/SecondBox';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const ContactsPage = () => {
  return (
    <SharedLayout >
      <ContactList/>
    </SharedLayout>
  )
};

export default ContactsPage;
//  <>
//    <FirstBox>
//      <ContactForm />
//      <Filter title="Find contacts by name" />
//    </FirstBox>
//    <SecondBox title="Contacts">
//      <ContactList />
//    </SecondBox>
//  </>;
