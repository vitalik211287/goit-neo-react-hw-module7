import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { UserIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, phone } = contact;

  return (
    <li className={css.item}>
      <div className={css.contactWrapper}>
        <div className={css.contactInfoWrapper}>
          <p className={css.text}>
            <span>
              <UserIcon className={css.userIcon} />
            </span>
            {name}
          </p>
          <p className={css.text}>
            <span>
              <PhoneIcon className={css.phoneIcon} />
            </span>
            {phone}
          </p>
        </div>

        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
    </li>
  );
}
