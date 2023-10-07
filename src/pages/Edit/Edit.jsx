import { useSelector } from 'react-redux';
import styles from './Edit.module.css';

const Edit = () => {
  const { user } = useSelector((state) => state.user);

  console.log(user);

  const fullName = `${user.name || ''} ${user.surname || ''}`;

  return (
    <>
      <section>
        <div className={styles.basic}>
          <h4>Профиль</h4>
          <div className={styles.cover}></div>
          <div className={styles.info}>
            <label className={styles.avatar}>
              <img
                src={
                  user.avatar ||
                  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                }
                alt='AVATAR'
              />
              <input type='file' name='avatar' />
            </label>
            <p className={styles.fullname}>{fullName}</p>
            <button>Cохранить</button>
          </div>
        </div>
        <div className={styles.additional}></div>
      </section>
      <div className='aside-container'>COMMUNITY</div>
    </>
  );
};

export default Edit;
