
import { useState, useRef } from 'react';
import styled from 'styled-components';

const FormData = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 60%;
    margin: 2rem auto;
    height: 10rem;
    background-color: #fff;
    padding: 0 3rem;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 3px rgba(0,0,0,0.2);
    box-sizing: border-box;

    

    & label{
    font-size: 1.5rem;
    font-weight: 700;
    margin: 10px 0 5px 0;
    color:  black;
    }

    & input{
    width: 100%;
    height: 2rem;
    border: 2px solid #ccc;
    /* border-radius: 5px; */
    padding: 0 1rem;
    box-sizing: border-box;
    font-size: 1rem;
    margin: 0 0 10px 0;
    }

    & button{

    padding: 0.8rem 2rem;
    box-sizing: border-box;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;
    margin: 0 0 10px 0;
    background-color: #B23870;
    color: #fff;
    }

    @media (max-width: 500px){
        width: 90%;
        & button {
            padding: 10px 20px;
            font-size: 16px;
            font-weight: 500;
        }
    }


    

`;

function Goal(props){
    let task;
    const inputValue = useRef();
    // const [value, setValue] = useState('');
    // const [isValid, setIsValid] = useState(true);
    const onClickHandler = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        task = inputValue.current.value;
        // task = value;
        // if(value.trim().length === 0){
        //     setIsValid(false);
        //     return;
        // }
        inputValue.current.value = '';
        props.newTaskAdded(task);
        // console.log(task);
        // setValue('');
    }
    // const onChangeHandler = (e) => {
    //     if(e.target.value.trim().length > 0){
    //         setIsValid(true);
    //     }
        
    //     // setValue(e.target.value);
    // }
    return (
        
            <FormData >
                <label >Today's Goal</label>
                <input type="text"   placeholder="Enter Task" ref={inputValue}/>
                <button onClick={onClickHandler}>Add Goal</button>
            </FormData>
            

    
    )
}
export default Goal;