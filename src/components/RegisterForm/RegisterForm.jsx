import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import page from '../../pages/Home/HomePage.module.css';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={page.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h2>Register form</h2>
        <label className={css.formLabel}>
          Username
          <input
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Enter username"
            required
          />
        </label>
        <label className={css.formLabel}>
          Email
          <input
            className={css.formInput}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </label>
        <label className={css.formLabel}>
          Password
          <input
            className={css.formInput}
            type="password"
            name="password"
            placeholder="Enter password"
            pattern=".{7,}"
            title="Your password must contain at least 7 characters."
            required
          />
        </label>
        <button className={css.formButton} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
