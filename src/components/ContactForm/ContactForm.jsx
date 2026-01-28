import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedPhone) return;

    dispatch(addContact({ name: trimmedName, phone: trimmedPhone }));

    setName("");
    setPhone("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.field}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.field}
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>

      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
