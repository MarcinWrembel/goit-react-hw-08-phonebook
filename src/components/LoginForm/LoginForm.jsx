import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
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
        <label className={css.label}>
          Email
          <input type="email" name="email" placeholder="Enter email" required />
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
