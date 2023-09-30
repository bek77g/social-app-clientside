import { ReactComponent as VKLogo } from '../../../assets/vectors/content-logo.svg';

//styles
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className={styles.wrapper}>
          <a className={styles.logo} href='#'>
            <h1>
              <VKLogo />
            </h1>
          </a>
          <div className={styles.player}>PLAYER</div>
          <div className={styles.profile}>
            <h3>Elvis</h3>
            <div className={styles.avatar}>
              <img src='' alt='AVATAR' />
              <span className={styles.dropdown}>0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
