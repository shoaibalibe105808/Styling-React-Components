import React, { useState } from 'react';
//import styled from 'styled-components';
import Button from '../../UI/Button/Button';
//import './CourseInput.css';
import styles from './CourseInput.module.css';

// const FormControl = styled.div `


//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${(props=>props.invalid?'red':'black')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props=>(props.invalid?'red':'#ccc')};
//   background: ${(props=>props.invalid?'#fad0ec':'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }


// `




const CourseInput = props => {

  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  //const [isClicked, setIsClicked] = React.useState(false);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // console.log(enteredValue.trim().length);
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };
  // const labelStyleHandler = () => {
  //   if(isValid===false){color: 'red'}
  //   else {color: 'black'}
  // };
// string literl is alt+><
// 1. for dynamic style, we use { }
// 2. using string literl, we can use as string as well 
//    as dynamic expression using $ sign with curly braces

  // orginal

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );

  
  // const clickHandler = ()=>{
  //   console.log(isClicked);
  //     setIsClicked(!isClicked);// true
  // };
  // return (
  //     <div>
  //         <p className={`${isClicked===true?'active':''}`}>Style me!</p>
  //         <button onClick={clickHandler}>Toggle style</button>
  //     </div>
  // );



  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className="form-control">
  //       <label style={{color: isValid===false ? 'red':'black'}}>Course Goal</label>
  //       <input style={{borderColor: isValid===false ? 'red': 'black', background: isValid===false? 'salmon':'transparent'}} type="text" onChange={goalInputChangeHandler}/>
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
};

export default CourseInput;



