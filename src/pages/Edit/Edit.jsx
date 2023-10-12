import styles from './Edit.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { changeUserAvatar, editUser } from 'redux/features/userSlice';
import { useState } from 'react';
import userPlaceholder from 'assets/vectors/user-placeholder.svg';
import { uploadPhoto } from 'utils/uploadPhoto';
import { toast } from 'react-toastify';

const Edit = () => {
  const { user } = useSelector((state) => state.user);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const fullName = `${user.name || ''} ${user.surname || ''}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const handleEditUser = (data) => {
    dispatch(editUser({ userId: user._id, data })).then(() =>
      toast.success('Данные успешно изменены')
    );
    setIsEditable(false);
  };

  const handleUploadAvatar = async (e) => {
    const selectedFile = e.target.files[0];
    const uploadedPhotoUrl = await uploadPhoto(selectedFile);
    dispatch(
      changeUserAvatar({ avatarUrl: uploadedPhotoUrl, userId: user._id })
    ).then(() => {
      toast.success('Аватар успешно изменён');
    });
  };

  return (
    <>
      <section>
        <div className={styles.basic}>
          <h4>Профиль</h4>
          <div className={styles.cover}></div>
          <div className={styles.info}>
            <label className={styles.avatar}>
              <img src={user.avatar || userPlaceholder} alt='AVATAR' />
              <input type='file' name='avatar' onChange={handleUploadAvatar} />
            </label>
            {isEditable ? (
              <form onSubmit={handleSubmit(handleEditUser)}>
                <div className={styles.editable}>
                  <input
                    {...register('name')}
                    type='text'
                    placeholder='Имя'
                    defaultValue={user.name}
                  />
                  <input
                    {...register('surname')}
                    type='text'
                    placeholder='Фамилия'
                    defaultValue={user.surname}
                  />
                </div>
                <button type='submit'>Cохранить</button>
              </form>
            ) : (
              <>
                <div className={styles.editable}>
                  <p>{fullName}</p>
                </div>
                <button onClick={() => setIsEditable(true)}>Изменить</button>
              </>
            )}
          </div>
        </div>
        <div className={styles.additional}></div>
      </section>
      <div className='aside-container'>COMMUNITY</div>
    </>
  );
};

export default Edit;
