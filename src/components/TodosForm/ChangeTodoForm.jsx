import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./TodosForm.module.css";
import { validationSchema } from "helpers/validationSchema";

// const validationSchema = Yup.object().shape({
//   text: Yup.string()
//     .min(2, "Too Short!")
//     .max(20, "Too Long!")
//     .required("Required"),
// });

export const ChangeTodoForm = ({ onSubmit, text, cancelUpdate }) => {
  const handleSubmit = (value, options) => {
    onSubmit(value.text);
    options.resetForm();
  };

  return (
    <Formik
      initialValues={{ text }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className={s.box}>
          <Field name="text" type="text" />
          <button type="submit">Change</button>
          <button type="button" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
        <ErrorMessage name="text" component="span" />
      </Form>
    </Formik>
  );
};
