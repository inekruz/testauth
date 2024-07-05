import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../App.css';

function AddPost() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post('https://freefakeapi.io/authapi/posts', data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      // Перенаправить или показать сообщение об успешном добавлении
    } catch (error) {
      console.error('Ошибка при добавлении поста:', error);
    }
  };

  return (
    <div className="add-post containers_shadow">
      <h1>Добавить Пост</h1>
      <form className="add-post_form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Заголовок"
            {...register("title", {
              required: true,
              minLength: 10,
              maxLength: 40
            })}
          />
          {errors.title && <p>Заголовок должен быть от 10 до 40 символов.</p>}
        </div>
        <div>
          <textarea
            placeholder="Содержимое"
            {...register("content", {
              required: true,
              maxLength: 260
            })}
          />
          {errors.content && <p>Содержимое не должно превышать 260 символов.</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Slug"
            {...register("slug", {
              required: true
            })}
          />
          {errors.slug && <p>Slug обязателен.</p>}
        </div>
        <div>
          <input
            type="url"
            placeholder="URL картинки"
            {...register("picture", {
              required: true,
              pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
            })}
          />
          {errors.picture && <p>URL картинки обязателен и должен быть действительным URL.</p>}
        </div>
        <div>
          <input
            type="number"
            placeholder="ID пользователя"
            {...register("user", {
              required: true,
              min: 1
            })}
          />
          {errors.user && <p>ID пользователя обязателен и должен быть положительным числом.</p>}
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddPost;
