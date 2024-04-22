import ContactForm from '../contact-form/ContactForm';
import ContactList from '../contact-list/ContactList';
import SearchBox from '../search-box/SearchBox';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
