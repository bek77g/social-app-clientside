import { GrEmoji } from 'react-icons/gr';
import { LuImagePlus } from 'react-icons/lu';
import styles from './CreatePost.module.css';
import { useRef, useState } from 'react';
import useAutosizeTextArea from 'hooks/useAutosizeTextArea';
import { uploadPhoto } from 'utils/uploadPhoto';
import { useDispatch } from 'react-redux';
import { createPost } from 'redux/features/postsSlice';

const CreatePost = () => {
  const [headingValue, setHeadingValue] = useState('');
  const [fieldContent, setFieldContent] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const fieldRef = useRef();

  const dispatch = useDispatch();

  useAutosizeTextArea(fieldRef.current, fieldContent);

  const handleUploadCover = async (e) => {
    const selectedFile = e.target.files[0];
    const selectedFileUrl = await uploadPhoto(selectedFile);
    setCoverUrl(selectedFileUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title: headingValue,
      content: fieldContent,
      image: coverUrl,
    };
    dispatch(createPost(body));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.heading}>
        <p>Заголовок</p>
        <input
          type='text'
          onChange={(e) => setHeadingValue(e.target.value)}
          value={headingValue}
        />
      </label>
      <div className={styles.field}>
        <textarea
          ref={fieldRef}
          placeholder='Напишите...'
          value={fieldContent}
          onChange={(e) => setFieldContent(e.target.value)}
        />
        <GrEmoji size='20' />
      </div>
      {coverUrl && (
        <img
          className={styles.cover}
          src={coverUrl}
          alt={headingValue ? `Фото - ${headingValue}` : 'Изображение поста'}
        />
      )}
      <div className={styles.handlers}>
        <div className={styles.upload}>
          <label title='Загрузить изображение'>
            <LuImagePlus size='20' />
            <input type='file' accept='image/*' onChange={handleUploadCover} />
          </label>
        </div>
        <button className={styles.submit} type='submit'>
          Отправить
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
