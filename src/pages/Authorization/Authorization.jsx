import { useState } from 'react';
import { ReactComponent as VKLogo } from '../../assets/vectors/content-logo.svg';
import styles from './Authorization.module.css';
import { useForm } from 'react-hook-form';

const Login = ({ setAuthType, onSubmit }) => {
  const switchAuth = () => {
    setAuthType('register');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__logo}>
        <VKLogo />
      </div>
      <h3 className={styles.form__title}>Введите почту</h3>
      <p className={styles.form__text}>Введите данные для входа в аккаунт</p>
      <input
        type='email'
        placeholder='Почта'
        {...register('mail', {
          required: 'Обязательно напишите почту',
        })}
      />
      {errors.mail && <p className={styles.error}>{errors.mail.message}</p>}
      <input
        type='password'
        placeholder='Пароль'
        {...register('password', {
          required: 'Обязательно напишите пароль',
        })}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}
      <label className={styles.form__save}>
        <input type='checkbox' />
        <span>Сохранить вход</span>
      </label>
      <button type='submit'>Вход</button>
      <p className={styles.switch} onClick={switchAuth}>
        Регистрация
      </p>
    </form>
  );
};

const Register = ({ setAuthType, onSubmit }) => {
  const switchAuth = () => {
    setAuthType('login');
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__logo}>
        <VKLogo />
      </div>
      <h3 className={styles.form__title}>Введите почту</h3>
      <p className={styles.form__text}>
        Ваша почта будет использоваться для входа в аккаунт
      </p>
      <input
        type='email'
        placeholder='Почта'
        {...register('mail', {
          required: 'Обязательно напишите почту',
        })}
      />
      {errors.mail && <p className={styles.error}>{errors.mail.message}</p>}
      <input
        type='password'
        placeholder='Пароль'
        {...register('password', {
          required: 'Обязательно напишите пароль',
          minLength: {
            value: 8,
            message: 'Длина пароля должна быть более 8 символов',
          },
          maxLength: {
            value: 16,
            message: 'Длина пароля должна быть менее 16 символов',
          },
          pattern: {
            value: /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/,
            message:
              'Пароль должен содержать хотя бы одну цифру и хотя бы одну заглавную букву',
          },
        })}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}
      <input
        type='password'
        placeholder='Подтвердите пароль'
        {...register('confirmPassword', {
          required: 'Обязательно напишите пароль подтверждение',
          validate: (val) =>
            val !== watch('password') ? 'Ваши пароли не совпадают' : null,
        })}
      />
      {errors.confirmPassword && (
        <p className={styles.error}>{errors.confirmPassword.message}</p>
      )}
      <label className={styles.form__save}>
        <input type='checkbox' />
        <span>Сохранить вход</span>
      </label>
      <button type='submit'>Регистрация </button>
      <p className={styles.switch} onClick={switchAuth}>
        Вход
      </p>
    </form>
  );
};

const Authorization = () => {
  const [authType, setAuthType] = useState('login');

  const handleSubmit = (data) => {
    console.log(data);
    switch (authType) {
      case 'login':
        //вызов функции входа
        break;
      case 'register':
        //вызов функции регистрации
        break;
      default:
        break;
    }
  };

  return (
    <main className={styles.main}>
      <div className='container'>
        <div className={styles.content}>
          {authType === 'login' && (
            <Login setAuthType={setAuthType} onSubmit={handleSubmit} />
          )}
          {authType === 'register' && (
            <Register setAuthType={setAuthType} onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Authorization;
