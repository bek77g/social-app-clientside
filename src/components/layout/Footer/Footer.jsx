import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className={styles.wrapper}>
          <p className={styles.copyright}>
            <span>VK</span>© 2006-2020
          </p>
          <ul className={styles.links}>
            <li>
              <a href='/'>About VK</a>
            </li>
            <li>
              <a href='/'>Terms</a>
            </li>
            <li>
              <a href='/'>Developers</a>
            </li>
          </ul>
          <ul className={styles.links}>
            <li>
              <a href='/'>English</a>
            </li>
            <li>
              <a href='/'>Русский</a>
            </li>
            <li>
              <a href='/'>Українська</a>
            </li>
            <li>
              <a href='/'>all languages »</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
