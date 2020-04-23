import React, { Component } from 'react';

export default class ApplicationRespById extends Component {
  
  // constructor(props) {
  //   super(props);
    
  //   // this.state = {
  //   //   todo_description: '',
  //   //   todo_responsible: '',
  //   //   todo_priority: '',
  //   //   todo_completed: false
  //   // }
  // }

  render() {
    const fruits = [
      { id: 1, name: 'Orange' },
      { id: 2, name: 'Ananas' },
      { id: 3, name: 'Apple' },
      { id: 4, name: 'Strawberry' },
      { id: 5, name: 'Pear' },
      { id: 6, name: 'Raspberry' },
    ]

    return (
      <div className="fruitList">
        {fruits.map((fruit) => (
          <a href={`/fruits/${fruit.id}`}>{fruit.name}<br /></a>
        ))}
      </div>
    )
  }
}