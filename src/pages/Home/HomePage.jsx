import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.header}>This is your personal Phonebook</h1>
      <span className={css.book} role="img" aria-label="Greeting icon">
        {' '}
        {'\u{1F4D8}'}{' '}
      </span>
    </div>
  );
}
