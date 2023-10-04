import { InputField } from 'components/ui';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { HiSearch } from 'react-icons/hi';
import { FaBell } from 'react-icons/fa';
import { ReactComponent as VKLogo } from 'assets/vectors/content-logo.svg';
import userPlaceholder from 'assets/vectors/user-placeholder.svg';

//styles
import styles from './Header.module.css';
import { useSelector } from 'react-redux';

const Profile = ({ user }) => {
  const avatar = user.avatar || userPlaceholder;
  return !!user ? (
    <>
      <h3>{user.name}</h3>
      <div className={styles.avatar}>
        <img src={avatar} alt='AVATAR' />
        <MdKeyboardArrowDown color='#fff' />
      </div>
    </>
  ) : (
    <Link to='/auth'>Вход</Link>
  );
};

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
            <Profile user={user} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
