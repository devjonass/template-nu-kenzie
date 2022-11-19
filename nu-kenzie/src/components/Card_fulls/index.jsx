import { CardTesting } from "./Card/Card_Testing";
import { useEffect, useState } from "react";

export const FullCards = ({ listTransactions, setListTransactions }) => {
  const [filtereds, setFiltereds] = useState(listTransactions);

  useEffect(() => {
    setFiltereds(listTransactions);
  }, [listTransactions]);

  const filters = (e) => {
    const filtered = listTransactions.filter(
      (items) => e.target.value === items.type
    );
    console.log(filtered);
    filtered.length === 0
      ? setFiltereds(listTransactions)
      : setFiltereds(filtered);
  };

  return (
    <div className="containerCard">
      <div>
        <h2>Resumo financeiro</h2>

        <div className="containerBtnFiltros">
          <button className="botao" value="todos" onClick={filters}>
            Todos
          </button>
          <button className="botao" value="entrada" onClick={filters}>
            Entradas
          </button>
          <button className="botao" value="saida" onClick={filters}>
            Despesas
          </button>
        </div>
      </div>

      <CardTesting
        listTransactions={filtereds || listTransactions}
        listTransactionsOfc={listTransactions}
        setListTransactions={setListTransactions}
      />
    </div>
  );
};
