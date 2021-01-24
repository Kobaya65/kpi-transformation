import React from "react";
import { Link } from "react-router-dom";

/**
 * Item of the menu
 *
 * @param {*} props.nom  name displayed for the link
 * @param {*} props.vers the absolute path to link to
 */
const MyLink = (props) => (
  <Link className="dropdown-item" to={props.vers}>
    {props.nom}
  </Link>
);

export default MyLink;
