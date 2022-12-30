import { Box } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

const ContactsView = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      paddingBottom="250px"
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </Box>
  );
};

export default ContactsView;