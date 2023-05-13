import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from '../RegisterForm/RegisterForm.module.css';

import page from '../../pages/Home/HomePage.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={page.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h2>Login form</h2>
        <label className={css.formLabel}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className={css.formInput}
            required
          />
        </label>
        <label className={css.formLabel}>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className={css.formInput}
            required
            autoComplete="off"
          />
        </label>
        <button type="submit" className={css.formButton}>
          Log In
        </button>
      </form>
    </div>
  );
};
