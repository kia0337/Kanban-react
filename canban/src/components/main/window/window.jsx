import React, { useState } from 'react';
import './window.css';
import { useNavigate, useParams } from 'react-router-dom';
import close from './close.svg';

function Window(props) {
  const { tasks, setTasks } = props;
  const { id } = useParams();
  const task = JSON.parse(window.localStorage.getItem('tasks')).find(
    (task) => task.id === id
  );

  const navigate = useNavigate();
  const [description, setDescription] = useState(
    task.description
  );

  const addDescription = () => {
    const tasksCopy = tasks.map((elem) => {
      if (elem.id === id) {
        elem.description = description;
      }
      return elem;
    });
    setTasks(tasksCopy);
  };

  return (
      <div className = 'window'>
        <div className = 'window__wrap'>
          <h2 className = 'window__title'>{ task.title }</h2>
          <textarea placeholder = 'This task has no description'
            className = 'window__text'
            onFocus = {() => {
              description === '' && setDescription('');
            }}
            onChange = {(e) => {
              setDescription(e.target.value);
            }}
            value = { description }
            onBlur = { addDescription }>
          </textarea>
          <button className = 'window__btn'
          onClick = {() => navigate(-1)}>
            <img src = { close } />
          </button>
        </div>
      </div>
  );
}

export default Window;