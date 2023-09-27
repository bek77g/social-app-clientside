import { useState } from 'react';
import { ReactComponent as VKLogo } from '../../assets/vectors/content-logo.svg';
import { useForm } from 'react-hook-form';
import { InputField } from '../../components';
import styles from './Authorization.module.css';

const validateEmail = (value) => {
  return {
    required: 'Обязательно напишите почту',
  };
};

const validatePassword = (value) => {
  return {
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
  };
};

const validateConfirmPassword = (value, watchPassword) => {
  return {
    required: 'Обязательно напишите пароль подтверждения',
    validate: (val) =>
      val !== watchPassword ? 'Ваши пароли не совпадают' : null,
  };
};

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
      <InputField
        errorClassName={styles.error}
        label='Почта'
        type='email'
        register={register}
        name='mail'
        errors={errors}
        validation={validateEmail}
      />
      <InputField
        errorClassName={styles.error}
        label='Пароль'
        type='password'
        register={register}
        name='password'
        errors={errors}
        validation={validatePassword}
      />
      <label className={styles.form__save}>
        <input type='checkbox' />
        <span>Сохранить вход</span>
      </label>
      <button type='submit'>Вход</button>
      <p className={styles.switch}>
        Создайте аккаунт, <span onClick={switchAuth}>Регистрация</span>
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
      <InputField
        errorClassName={styles.error}
        label='Почта'
        type='email'
        register={register}
        name='mail'
        errors={errors}
        validation={validateEmail}
      />
      <InputField
        errorClassName={styles.error}
        label='Пароль'
        type='password'
        register={register}
        name='password'
        errors={errors}
        validation={validatePassword}
      />
      <InputField
        errorClassName={styles.error}
        label='Подтвердите пароль'
        type='password'
        register={register}
        name='confirmPassword'
        errors={errors}
        validation={(value) =>
          validateConfirmPassword(value, watch('password'))
        }
      />
      <label className={styles.form__save}>
        <input type='checkbox' />
        <span>Сохранить вход</span>
      </label>
      <button type='submit'>Регистрация</button>
      <p className={styles.switch}>
        Есть аккаунт, тогда совершите <span onClick={switchAuth}>Вход</span>
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
        // вызов функции входа
        break;
      case 'register':
        // вызов функции регистрации
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
