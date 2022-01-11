import React from "react";
import './Card.css'

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00'
  }
  return (
    <div className="card" style={cardStyle} >
      <div className="title">{props.title}</div>
      <div className="content">{props.children}</div>
   
    </div>
  );
};
