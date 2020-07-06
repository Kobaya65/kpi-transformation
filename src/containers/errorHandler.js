import React, { Component } from "react";

/**
 * Error handling centralization
 *
 * @param {*} props error the error that was encountered
 */
export default class HandleError extends Component {
  render() {
    return (
      <div>
        <h1>An error has occured.</h1>
        <p>{props.error}</p>
      </div>
    );
  }
}

// export { HandleError };
