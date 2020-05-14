import React from "react";
import { Link } from "react-router-dom";

const MyLink = (props) => (
  <Link className="dropdown-item" to={props.vers}>
    {props.nom}
  </Link>
);

export default MyLink;
