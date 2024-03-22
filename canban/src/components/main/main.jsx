import React from 'react';
import './main.css';
import Task from './task/task';
import Window from './window/window';
import { Route, Routes, useLocation } from 'react-router-dom';

function Main(props) {
  const { tasks, setTasks } = props;
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <main className='main'>
      <Routes location={background || location}>
        <Route path='/' element={<Task tasks={tasks} setTasks={setTasks} />} />
      </Routes>
      {background && (
        <Routes>
          <Route path='/tasks/:id' element={<Window tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      )}
    </main>
  );
}

export default Main;