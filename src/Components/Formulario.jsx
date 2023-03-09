import { useState } from "react";
import styles from "./Formulario.module.css";
import Card from "./Card";

function Formulario() {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [showMsj, setshowMsj] = useState(false);

  function handleChangeName(event) {
    setInputName(event.target.value);
  }

  function handleChangeLastName(event) {
    setInputLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      inputName.trim().length < 3 ||
      inputName.trim()[0] === " " ||
      inputLastName.trim().length < 6
    ) {
      setshowMsj(true);
      setShowCard(false);
      return;
    }
    console.log("enviando.....");
    setShowCard(true);
    setshowMsj(false);
  }

  return (
    <div>
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          className={styles.input}
          type="text"
          value={inputName}
          onChange={handleChangeName}
        ></input>
        <label>LastName: </label>
        <input
          className={styles.input}
          type="text"
          value={inputLastName}
          onChange={handleChangeLastName}
        ></input>
        <button type="submit">Send</button>
        {showMsj && (
          <span>Por favor chequea que la información sea correcta.</span>
        )}
      </form>
      </div>
      <div>
      {showCard && <Card name={inputName} lastname={inputLastName}></Card>}
      </div>
     
    </div>

  );
}

export default Formulario;
