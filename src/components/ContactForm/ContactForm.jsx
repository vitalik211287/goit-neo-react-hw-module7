import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedNumber = number.trim();
    if (!trimmedName || !trimmedNumber) return;

    dispatch(addContact({ name: trimmedName, number: trimmedNumber }));

    setName("");
    setNumber("");
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
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>

      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
