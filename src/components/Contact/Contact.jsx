import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactWrapper}>
      <div className={css.contactInfoWrapper}>
        <p className={css.text}>{contact.name}</p>
        <p className={css.text}>{contact.number}</p>
      </div>

      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}


