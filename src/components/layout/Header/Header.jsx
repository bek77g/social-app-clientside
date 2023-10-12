import { InputField, UniversalTransition } from 'components/ui';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { HiSearch } from 'react-icons/hi';
import { FaBell } from 'react-icons/fa';
import { ReactComponent as VKLogo } from 'assets/vectors/content-logo.svg';
import userPlaceholder from 'assets/vectors/user-placeholder.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

//styles
import styles from './Header.module.css';
import useOutsideClick from 'hooks/useOutsideClick';
import { logoutUser } from 'redux/features/userSlice';

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const avatar = user.avatar || userPlaceholder;

  const profileRef = useRef();

  const handleClickProfile = () =>
    setShowProfileMenu((prevState) => !prevState);
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useOutsideClick(profileRef, () => setShowProfileMenu(false));

  return (
    <div className={styles.profile} ref={profileRef}>
      <div className={styles.profile__inner} onClick={handleClickProfile}>
        <h3>{user.name}</h3>
        <div className={styles.avatar}>
          <img src={avatar} alt='AVATAR' />
          <MdKeyboardArrowDown color='#fff' />
        </div>
      </div>
      <UniversalTransition
        in={showProfileMenu}
        timeout={300}
        transitionType='fade'
        className={styles.profile__menu}>
        <ul>
          <li>
            <Link to='/settings'>
              <FiSettings size='16' color='var(--secondary-color)' /> Настройки
            </Link>
          </li>
          <li>
            <Link to='/support'>
              <FiHelpCircle size='16' color='var(--secondary-color)' /> Помощь
            </Link>
          </li>
          <li>
            <Link to='/logout' onClick={handleLogout}>
              <FiLogOut size='16' color='var(--secondary-color)' /> Выйти
            </Link>
          </li>
        </ul>
      </UniversalTransition>
    </div>
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
          {user ? <Profile user={user} /> : <Link to='/auth'>Войти</Link>}
        </div>
      </div>
    </header>
  );
};

export default Header;
