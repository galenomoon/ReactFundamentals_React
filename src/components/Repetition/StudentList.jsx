import React from "react";
import students from "../../data/students";

// Transforming a JS array on a JSX array
export default (props) => {
  const studentsLi = students.map((students) => {
    return (
      <li key={students.id}>
        #{students.id} - {students.name} | {students.score}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{studentsLi}</ul>
    </div>
  );
};
