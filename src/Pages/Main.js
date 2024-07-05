import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Main() {
  return (
    <div className="main containers_shadow">
      <h1>Главная</h1>
      <Link to="/add-post">Добавить Пост</Link>
    </div>
  );
}

export default Main;
