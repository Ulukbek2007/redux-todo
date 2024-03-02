import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const text = useSelector(state => state.text);
  const todo = useSelector(state => state.todo);

  const newtext = (e) => {
    const newtex = e.target.value;
    dispatch({ type: 'value', payload: newtex });
  };

  const todoadd = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'addtodo', payload: { text: text } });
      dispatch({ type: 'value', payload: '' });
    }
  };

  return (
    <div className='container'>
      <div className='btns'>
        <input
          value={text}
          onChange={newtext}
          className='form-control'
          type="text"
          placeholder='Todo'
        />
        <button onClick={todoadd} className='btn btn-outline-info'>add</button>
      </div>
      <ul className='ul'>
        {todo.map((el, index) => (
          <li key={index}>
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;