import styles from './Profile.module.css';
import { useParams } from 'react-router-dom';
import { GrLocation } from 'react-icons/gr';
import { RiErrorWarningLine } from 'react-icons/ri';
import { CreatePost } from 'components';

const Profile = () => {
  const { profileId } = useParams();

  return (
    <div className={styles.profile}>
      <div className={styles.top}>
        <div className={styles.cover}></div>
        <div className={styles.profileHeader}>
          <img src='' alt='' className={styles.avatar} />
          <div className={styles.info}>
            <h2>Максим Максимов</h2>
            <div className={styles.fullInfo}>
              <div>
                <GrLocation size='20' />
              </div>
              <div>
                <RiErrorWarningLine size='20' />
              </div>
            </div>
          </div>
          <div className={styles.handlers}></div>
        </div>
      </div>
      <div className={styles.bottom}>
        <section>
          <CreatePost />
        </section>
        <div className='aside-container'>ASIDE PANEL</div>
      </div>
    </div>
  );
};

export default Profile;
