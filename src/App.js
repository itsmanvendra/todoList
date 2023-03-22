import Goal from './Goal';
import TaskList from './TaskList';
import './App.css';
import { useState } from 'react';
function App() {
  const [a, setA] = useState(false);
  const items = [
    

  ]
  const [listItems, setListItems] = useState(items);
  const newTaskAdded = (task) => {
    const newList = [task, ...listItems];
    setListItems(newList);
  }
  const taskDone1 = (taskDone) => {
    const newItems = listItems.filter((item) => {
      
      return item !== taskDone;


    })
    setA(true);
    setListItems(newItems);
  }


  return (
    <div>
      <Goal newTaskAdded={newTaskAdded} />
      <TaskList items={listItems} updateList={taskDone1} addmsg={a} />
    </div>
  );
}

export default App;
