import css from "./Contact.module.css";
import { UserIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li>
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
            {number}
          </p>
        </div>

        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
    </li>
  );
}
