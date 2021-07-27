import React, { useState } from 'react';

import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livro',
      completed: true
    }
  ])

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
};

export default App;