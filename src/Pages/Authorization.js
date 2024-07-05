import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App.css';

function Authorization({ setUserAuthenticated }) {
  const { register, handleSubmit, reset } = useForm();
  const [token, setToken] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/.netlify/functions/login', {
        username: data.login,
        password: data.password
      });

      const authToken = response.data.token;
      setToken(authToken);
      setAuthenticated(true);
      reset();
      setUserAuthenticated(true);
      localStorage.setItem('authToken', authToken);  // Сохранение токена в localStorage
      history.push('/main');
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  return (
    <div>
      {authenticated ? <Main /> : (
        <div className='login containers_shadow'>
          <form className='authorization_form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Войдите</h1>
            <input
              type='text'
              placeholder='Логин'
              minLength='4'
              maxLength='16'
              id='loginInput'
              {...register("login", {
                required: true
              })}
            />
            <input
              type='password'
              placeholder='Пароль'
              minLength='6'
              maxLength='24'
              id='passwordInput'
              {...register("password", {
                required: true
              })}
            />
            <button type='submit'>Войти</button>
          </form>
          {token && <p>{token}</p>}
        </div>
      )}
    </div>
  );
}

export default Authorization;
