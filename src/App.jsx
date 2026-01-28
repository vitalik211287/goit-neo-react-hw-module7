// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
// import useLocalStorage from "./hooks/useLocalStorage";
// import { useState } from "react";
// import "./App.css";

// const INITIAL_CONTACTS = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];


// function App() {
//   const [contacts, setContacts] = useLocalStorage("contacts", INITIAL_CONTACTS);

//   const [filter, setFilter] = useState("");

//   const normalizedFilter = filter.toLowerCase().trim();

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );

//   return (
//     <div className="main">
//       <h1 className="mainText">Phonebook</h1>
//       <ContactForm onAddContact={setContacts} />
//       <SearchBox value={filter} onChange={setFilter} />
//       <ContactList contacts={filteredContacts} onAddContact={setContacts} />
//     </div>
//   );
// }

// export default App;

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h1 className="mainText">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
