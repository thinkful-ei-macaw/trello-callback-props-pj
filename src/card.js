import React from 'react';
import './card.css';

function Card(props) {
  return (
    <li className='card'>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
  <button onClick={() => props.onDeleteItem(props.id)} type="button">Delete</button>
    </li>
  )
}

export default
  Card