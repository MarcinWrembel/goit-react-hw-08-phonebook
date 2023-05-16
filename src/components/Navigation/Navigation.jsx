import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/"
        end
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to="/phonebook"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
