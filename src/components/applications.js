import React, { Component } from 'react';

export default class Applications extends Component {
  
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
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Claire' },
      { id: 4, name: 'David' },
    ]

    return (
      <div className="userList">
        {users.map((user) => (
          <a href={`/users/${user.id}`}>{user.name}<br /></a>
        ))}
      </div>
    )
  }
}