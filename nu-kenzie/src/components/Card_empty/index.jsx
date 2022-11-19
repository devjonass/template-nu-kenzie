import { CardEmpty } from "./Card/CardTestingEmpty";
import "./styles.css";

export const CardsFill = (props) => {
  return (
    <div className="containerCard">
      <div className="filtros">
        <h2>Resumo financeiro</h2>

        <div className="containerBtnFiltros">
          <button className="botao">Todos</button>
          <button className="botao">Entradas</button>
          <button className="botao">Despesas</button>
        </div>
      </div>

      <h3>Você ainda não possui nenhum lançamento</h3>
      <div className="card_fill">
        <CardEmpty />
        <CardEmpty />
        <CardEmpty />
      </div>
    </div>
  );
};
