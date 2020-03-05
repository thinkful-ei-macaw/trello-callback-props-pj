import React from 'react';
import Card from './card';
import './list.css';

function List(props) {
  return <section classname-list="true">
    <header>{props.header}</header>

    <div className='List-cards'>
    
      <ul> {props.cards.map((card) => {
        return <Card
          key={card.id}
          id = {card.id}
          title={card.title}
          content={card.content} 
          onDeleteItem={props.onDeleteItem}/>
      })}</ul>
      <button onClick={() => props.onAddItem(props.listId)} type="button">add</button>
      <button onClick={() => props.onDeleteList(props.listId)} type="button">delete</button>



    </div>
  </section>
};

export default List
