
import "./styles.css";

export const CardTesting = ({
  listTransactions,
  setListTransactions,
  listTransactionsOfc,
}) => {
  const remove = (e) => {
    const filter = listTransactionsOfc.filter((item) => {
      return +item.id !== +e.target.value;
    });

    setListTransactions(filter);
  };

  return (
    <ul>
      {listTransactions.map((item, index) => {
        return (
          <li
            key={index}
            className={item.type === "entrada" ? "entrada" : "saida"}
          >
            <div className="nomeDesc">
              <h3 className="descricao">{item.description}</h3>
              <h6 className="type">{item.type}</h6>
            </div>
            <h6>R$ {item.value}</h6>
            <button
              className="btnExcluir"
              value={item.id}
              onClick={remove}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};
