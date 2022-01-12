import React, { useState } from "react";
import "./Mega.css";

export default (props) => {
  function generateUncontainedNumbers(min, max, array) {
    const random = parseInt(Math.random() * (max - min)) + min;
    return array.includes(random)
      ? generateUncontainedNumbers(min, max, array)
      : random;
  }

  function generateNumbers(qtd) {
    const numbers = Array(qtd)
      .fill(0)
      .reduce((numb) => {
        const newNumber = generateUncontainedNumbers(1, 60, numb);
        return [...numb, newNumber];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numbers;
  }

  const [qtd, setQtd] = useState(props.qtd || 6);
  const initialNumbers = generateNumbers(qtd);
  const [numbers, setNumbers] = useState(initialNumbers);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numbers.join(" ")}</h3>
      <div>
        <label>
          <input
            min="6"
            max="15"
            type="number"
            value={qtd}
            onChange={(_) => {
              setQtd(+_.target.value);
              setNumbers(generateNumbers(+_.target.value));
            }}
          ></input>
        </label>
      </div>
      <button onClick={(_) => setNumbers(generateNumbers(qtd))}>
        Good Lucky!
      </button>
    </div>
  );
};
