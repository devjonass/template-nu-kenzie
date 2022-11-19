import { useState } from "react";
import "./styles.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [userInput, setUserInput] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userSelect, setUserSelect] = useState("entrada");
  const [object, setObject] = useState({});

  const submit = (e) => {
    e.preventDefault();
    const obj = {
      description: userInput,
      type: userSelect,
      value: userNumber,
      id: Date.now(),
    };
    setObject(obj);
    setListTransactions([...listTransactions, obj]);
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="container_description">
          <label className="title_description" htmlFor="description">
            Descrição
          </label>
          <input
            type="text"
            required
            name="description"
            id="description"
            placeholder="Digite aqui sua descrição"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <small>Ex:Compra de roupas</small>
        </div>
        <div className="container_values">
          <div className="values">
            <label htmlFor="value">Valor</label>
            <input
              required
              type="number"
              name="value"
              placeholder=" R$"
              id="value"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
            />
          </div>
          <div className="container_select">
            <label htmlFor="typeValue">Tipo de valor</label>
            <select
              name="typeEntries"
              onChange={(e) => setUserSelect(e.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </div>
        </div>
        <button className="btn_insert_value" type="submit">
          Inserir Valor
        </button>
      </form>
    </>
  );
};
