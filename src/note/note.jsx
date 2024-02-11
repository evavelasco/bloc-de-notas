import React from "react";

import "./note.css";

class Note extends React.Component {
  render() {
    const { title, content } = this.props; //obtenemos las propiedades de la constante
    return (
      <div className="note">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  }
}
export default Note;
