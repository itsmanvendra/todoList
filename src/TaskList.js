import './TaskList.css'
function TaskList(props){
    const onClickHandler = (e) => {
        const taskDone = e.target.textContent;
        props.updateList(taskDone);
    }
    if(props.items.length === 0 && props.addmsg){
        return (
            <div className='msg'>Great!! you have done all your task🎉</div>
        )
    }
    else if(props.items.length === 0){
        // console.log(props);
        return (
            <div className='msg'>Good Morning! Add your first task!</div>
        )
    }

    const items = props.items.map((item) => {
        return (
            <div key={item} className="item" onClick={onClickHandler}>{item}</div>
        )
    })
    return items;
}

export default TaskList;