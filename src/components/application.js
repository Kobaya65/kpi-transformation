import React, { Component } from 'react';

// const Appli = props => {
//   return ( <tr>
//       <td>{props.applications.TechnicalIdHexa}</td>
//       <td>{props.applications.Authentification}</td>
//       <td>{props.applications.CurrentState}</td>
//       <td>{props.applications.GlobalID}</td>
//       <td>{props.applications.Commentaire}</td>
//       <td>{props.applications.LibelleCourt}</td>
//       <td>{props.applications.NomCourt}</td>
//       <td>{props.applications.TypeAppli}</td>
//       <td>{props.applications.Concepts}</td>
//       <td>{props.applications.DateDebutProd}</td>
//       <td>{props.applications.DateFinProd}</td>
//     </tr>
//   );
// }

export default class Application extends Component {
  
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
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Claire' },
      { id: 4, name: 'David' },
    ]

    return (
      <div className="userList">
        {users.map((user, i) => (
          <a href={`/users/${ user.id }`}>{user.name} {i}<br /></a>
        ))}
      </div>
    )
  }
}