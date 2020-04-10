import React, { Component } from 'react';

class TableCell extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <td> {this.props.value} </td>
    );
  }
}

export default TableCell;