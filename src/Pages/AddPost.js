import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../App.css';

function AddPost() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem('authToken');
      const postData = {
        title: data.title,
        content: data.content,
        slug: 'default-slug',
        picture: 'https://default-image-url.com',
        user: 1 // Default user ID
      };
      const response = await axios.post('https://freefakeapi.io/authapi/posts', postData, {
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
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddPost;
