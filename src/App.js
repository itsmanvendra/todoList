import Goal from './Goal';
import TaskList from './TaskList';
import './App.css';
import { useState } from 'react';
function App() {
  const[warn, setWarn] = useState(false);
  
  const [a, setA] = useState(false);
  const items = [
    

  ]
  const [listItems, setListItems] = useState(items);
  const newTaskAdded = (task) => {
    if(task.trim().length === 0){
      setWarn(true);
    }
    else{
      const newList = [task, ...listItems];
      setListItems(newList);
    }
    
  }
  const taskDone1 = (taskDone) => {
    const newItems = listItems.filter((item) => {
      
      return item !== taskDone;


    })
    setA(true);
    setListItems(newItems);
  }

  const onClickHandler = () => {
    setWarn(false);

  }


  return (
    <div className='mainContainer'>
      <Goal newTaskAdded={newTaskAdded} />
      <TaskList items={listItems} updateList={taskDone1} addmsg={a} />
      <div onClick={onClickHandler} className={`${warn ? 'warning' : 'hidden'}`}>
        <div className='modal'>
          <div className='warning__heading'>
            Invalid Input
          </div>
          <div className='warning__container'>
            Please enter valid task!
            <button onClick={onClickHandler}>Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
