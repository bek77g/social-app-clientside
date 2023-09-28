import { useState } from 'react';
import { ReactComponent as VKLogo } from '../../assets/vectors/content-logo.svg';
import { useForm } from 'react-hook-form';
import { InputField } from '../../components/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//styles
import styles from './Authorization.module.css';

const Login = ({ setAuthType, onSubmit }) => {
  const switchAuth = () => {
    setAuthType('register');
  };

  const loginSchema = yup.object().shape({
    mail: yup
      .string()
      .required('Обязательно напишите почту')
      .email('Введите корректную почту'),
    password: yup.string().required('Обязательно напишите пароль'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(loginSchema) });

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
      />
      <InputField
        errorClassName={styles.error}
        label='Пароль'
        type='password'
        register={register}
        name='password'
        errors={errors}
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

  const registerSchema = yup.object().shape({
    mail: yup
      .string()
      .required('Обязательно напишите почту')
      .email('Введите корректную почту'),
    password: yup
      .string()
      .required('Обязательно напишите пароль')
      .min(8, 'Длина пароля должна быть более 8 символов')
      .max(16, 'Длина пароля должна быть менее 16 символов')
      .matches(
        /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/,
        'Пароль должен содержать хотя бы одну цифру и хотя бы одну заглавную букву'
      ),
    confirmPassword: yup
      .string()
      .required('Обязательно напишите пароль подтверждения')
      .oneOf([yup.ref('password'), null], 'Ваши пароли не совпадают'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(registerSchema) });

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
      />
      <InputField
        errorClassName={styles.error}
        label='Пароль'
        type='password'
        register={register}
        name='password'
        errors={errors}
      />
      <InputField
        errorClassName={styles.error}
        label='Подтвердите пароль'
        type='password'
        register={register}
        name='confirmPassword'
        errors={errors}
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
