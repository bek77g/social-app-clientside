import { ReactComponent as VKLogo } from 'assets/vectors/content-logo.svg';
import { InputField } from 'components/ui';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { HiSearch } from 'react-icons/hi';
import { FaBell } from 'react-icons/fa';

//styles
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <header>
      <div className='container'>
        <div className={styles.wrapper}>
          <a className={styles.logo} href='/'>
            <h1>
              <VKLogo />
            </h1>
          </a>
          <div className={styles.handlers}>
            <label className={styles.search}>
              <HiSearch color='#8fadc8' />
              <InputField type='text' label='Поиск' />
            </label>
            <FaBell color='#1E3C5F' size='20' cursor='pointer' />
          </div>
          <div className={styles.profile}>
            {!!user ? (
              <>
                <h3>{user.name}</h3>
                <div className={styles.avatar}>
                  <img
                    src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
                    alt='AVATAR'
                  />
                  <MdKeyboardArrowDown color='#fff' />
                </div>
              </>
            ) : (
              <Link to='/auth'>Вход</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
