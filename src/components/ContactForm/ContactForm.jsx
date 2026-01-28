import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const validationSchema = yup.object().shape({
  name: yup.string().min(3).max(50).required(),
  number: yup.string().min(3).max(50).required(),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const name = values.name.trim();
        const number = values.number.trim();

        const exists = contacts.some(
          (c) => c.name.toLowerCase() === name.toLowerCase(),
        );
        if (exists) {
          alert(`${name} is already in contacts`);
          return;
        }

        dispatch(addContact({ name, number }));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <Field
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={css.field}
        />
        <ErrorMessage component="span" name="name" className={css.error} />

        <label htmlFor="number" className={css.label}>
          Number
        </label>
        <Field
          id="number"
          name="number"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={css.field}
        />
        <ErrorMessage component="span" name="number" className={css.error} />

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
