import Goal from './Goal';
import TaskList from './TaskList';
import './App.css';
import { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
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

  const Modal = (props) => {
    return (
      <div onClick={props.onClickHandler} className={`${props.warn ? 'warning' : 'hidden'}`}>
        <div className='modal'>
          <div className='warning__heading'>
            Invalid Input
          </div>
          <div className='warning__container'>
            Please enter valid task!
            <button onClick={props.onClickHandler}>Okay</button>
          </div>
        </div>
      </div>
    )

  }



  return (
    <Fragment className='mainContainer'>
      <Goal newTaskAdded={newTaskAdded} />
      <TaskList items={listItems} updateList={taskDone1} addmsg={a} />
      {ReactDOM.createPortal(<Modal warn={warn} onClickHandler={onClickHandler} />, document.getElementById('modal'))}
    </Fragment>
  );
}

export default App;
