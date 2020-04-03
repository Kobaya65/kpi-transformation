import React, { Component } from 'react';

export default class ApplicationsResp extends Component {
  
  constructor(props) {
    super(props);
    
    // this.state = {
    //   todo_description: '',
    //   todo_responsible: '',
    //   todo_priority: '',
    //   todo_completed: false
    // }
  }

  render() {
    const sports = [
      { id: 1, name: 'Football' },
      { id: 2, name: 'Basketball' },
      { id: 3, name: 'Escrime' },
      { id: 4, name: 'Cyclisme' },
      { id: 5, name: 'Boxe' },
    ]

    return (
      <div className="sportList">
        {sports.map((sport) => (
          <a href={`/sports/${sport.id}`}>{sport.name}<br /></a>
        ))}
      </div>
    )
  }
}