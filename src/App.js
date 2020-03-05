import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';

class App extends React.Component {

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: ['l', 'm'],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  };

  handleDeleteItem = cardId => {
    let lists = this.state.lists;
    let allCards = this.state.allCards;

    delete allCards[cardId];

    lists = lists.map(obj => {
      obj.cardIds = obj.cardIds.filter(element => element !== cardId)
      return obj;
    })

    this.setState({
      lists: lists,
      allCards: allCards
    })

  }

  handleAddItem = listId => {
    const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
   let newcard = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
    
    let lists = this.state.lists;
    let allCards = this.state.allCards;

    lists.find(obj => obj.id === listId).cardIds.push(newcard.id);
    allCards[newcard.id] = newcard;

    this.setState({
      lists: lists,
      allCards: allCards
    })
    
  }

  handleDeleteList = listId => {
    let lists = this.state.lists;

    lists = lists.filter(obj => obj.id !== listId);

    this.setState({
      lists: lists
    })
  }

  render() {
    return (
      <main className='App'>
        <header className='Header'>
          <h1>Trelloyes!</h1>
  
        </header>
        <div className='App-list'>{this.state.lists.map(list => <List header={list.header}
          cards={list.cardIds.map(cardId => this.state.allCards[cardId])} key={list.id} listId={list.id} onDeleteItem={this.handleDeleteItem} onAddItem={this.handleAddItem} onDeleteList={this.handleDeleteList}/>
  
        )}</div>
      </main>)
  }
}

export default App;
