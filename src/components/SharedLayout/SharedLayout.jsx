import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import UserMenu from '../UserMenu/UserMenu';
import FirstBox from '../FirstBox/FirstBox';
import SecondBox from '../SecondBox/SecondBox';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';

const SharedLayout = () => {
  return (
    <Container>
      <FirstBox>
        <ContactForm />
        <Filter />
      </FirstBox>

      <UserMenu />

      <SecondBox>
        <Outlet />
      </SecondBox>
    </Container>
  );
};

export default SharedLayout;
