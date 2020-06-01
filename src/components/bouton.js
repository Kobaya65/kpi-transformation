import React, { useState } from "react";

function Bouton(props) {
  const [etat, setEtat] = useState(props.texte);

  const boutonStyle = {
    border: "2px solid black",
    lineHeight: "2.5",
    padding: "0 5px 5px",
    fontSize: "1rem",
    textAlign: "center",
    color: "#fff",
    borderRadius: "10px",
    backgroundColor: "var(--rougeSg)",
    backgroundImage:
      "linear-gradient(to top left, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) 30%, rgba(0, 0, 0, 0))",
    boxShadow:
      "inset 2px 2px 3px rgba(255, 255, 255, .6), inset - 2px - 2px 3px rgba( 0, 0, 0, .6 )",
  };

  return (
    <button
      style={boutonStyle}
      type="button"
      onClick={() => setEtat(etat === "toutes" ? "manquantes" : "toutes")}
    >
      {etat}
    </button>
  );
}

export default Bouton;
