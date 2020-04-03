import React, { Component } from 'react';

export default class Application extends Component {
  
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
    const countries = [
      { id: 1, name: 'France' },
      { id: 2, name: 'Spain' },
      { id: 3, name: 'Italy' },
      { id: 4, name: 'Germany' },
      { id: 5, name: 'Switzerland' },
    ]

    return (
      <div className="countryList">
        {countries.map((country) => (
          <a href={`/countries/${country.id}`}>{country.name}<br /></a>
        ))}
      </div>
    )
  }
}