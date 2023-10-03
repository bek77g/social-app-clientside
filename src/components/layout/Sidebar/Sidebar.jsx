import { ReactComponent as HomeIcon } from 'assets/vectors/sidebar/home.svg';
import { ReactComponent as NewsIcon } from 'assets/vectors/sidebar/news.svg';
import { ReactComponent as MessagesIcon } from 'assets/vectors/sidebar/messages.svg';
import { ReactComponent as FriendsIcon } from 'assets/vectors/sidebar/friends.svg';
import { ReactComponent as GroupsIcon } from 'assets/vectors/sidebar/groups.svg';
import { ReactComponent as PhotosIcon } from 'assets/vectors/sidebar/photos.svg';
import { ReactComponent as MusicIcon } from 'assets/vectors/sidebar/music.svg';
import { ReactComponent as VideoIcon } from 'assets/vectors/sidebar/video.svg';
import { ReactComponent as GamesIcon } from 'assets/vectors/sidebar/games.svg';
import { ReactComponent as PayIcon } from 'assets/vectors/sidebar/pay.svg';
import { ReactComponent as WorkIcon } from 'assets/vectors/sidebar/work.svg';
import { ReactComponent as GoodsIcon } from 'assets/vectors/sidebar/goods.svg';
import { ReactComponent as BookmarksIcon } from 'assets/vectors/sidebar/bookmarks.svg';
import { ReactComponent as DocumentsIcon } from 'assets/vectors/sidebar/documents.svg';
import { ReactComponent as VirusIcon } from 'assets/vectors/sidebar/virus.svg';
//styles
import styles from './Sidebar.module.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const MenuItem = ({ text, link, icon: IconComponent, notice }) => {
  return (
    <li className={styles.menu__item}>
      {!!text ? (
        <a href={link} className={styles.menu__link}>
          <IconComponent />
          <p>{text}</p>
          {!!notice && <span className={styles.notice}>{notice}</span>}
        </a>
      ) : (
        <div className={styles.separator} />
      )}
    </li>
  );
};

const Sidebar = () => {
  const menuList = [
    {
      text: 'Моя страница',
      link: '/',
      icon: HomeIcon,
      notice: 415,
    },
    {
      text: 'Новости',
      link: '/',
      icon: NewsIcon,
      notice: 0,
    },
    {
      text: 'Сообщения',
      link: '/',
      icon: MessagesIcon,
      notice: 34,
    },
    {
      text: 'Друзья',
      link: '/',
      icon: FriendsIcon,
      notice: 0,
    },
    {
      text: 'Сообщества',
      link: '/',
      icon: GroupsIcon,
      notice: 7,
    },
    {
      text: 'Фотографии',
      link: '/',
      icon: PhotosIcon,
      notice: 0,
    },
    {
      text: 'Музыка',
      link: '/',
      icon: MusicIcon,
      notice: 0,
    },
    {
      text: 'Видео',
      link: '/',
      icon: VideoIcon,
      notice: 0,
    },
    {
      text: 'Игры',
      link: '/',
      icon: GamesIcon,
      notice: 0,
    },
    {
      text: '',
      link: '',
      icon: null,
      notice: 0,
    },
    {
      text: 'VK Pay',
      link: '/',
      icon: PayIcon,
      notice: 0,
    },
    {
      text: 'Работа',
      link: '/',
      icon: WorkIcon,
      notice: 0,
    },
    {
      text: '',
      link: '',
      icon: null,
      notice: 0,
    },
    {
      text: 'Товары',
      link: '/',
      icon: GoodsIcon,
      notice: 0,
    },
    {
      text: 'Закладки',
      link: '/',
      icon: BookmarksIcon,
      notice: 0,
    },
    {
      text: 'Документы',
      link: '/',
      icon: DocumentsIcon,
      notice: 0,
    },
    {
      text: '',
      link: '',
      icon: null,
      notice: 0,
    },
    {
      text: 'Коронавирус',
      link: '/',
      icon: VirusIcon,
      notice: 0,
    },
    {
      text: '',
      link: '',
      icon: null,
      notice: 0,
    },
  ];

  return (
    <aside className={styles.content}>
      <ul className={styles.menu}>
        {menuList.map((linkItem, idx) => (
          <MenuItem key={linkItem.text || idx} {...linkItem} />
        ))}
      </ul>
      <div className={styles.links}>
        <a href='/'>Блог</a> <a href='/'>Разработчикам</a>
        <a href='/'>Реклама</a>
        <a href='/'>
          Еще <MdOutlineKeyboardArrowDown />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
