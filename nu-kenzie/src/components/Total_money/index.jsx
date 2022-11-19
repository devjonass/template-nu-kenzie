import "./styles.css";

export const TotalMoney = ({ listTransactions }) => {
  const resultComplet = listTransactions.reduce((valorAtual, acc) => {
    if (acc.type === "entrada") {
      return parseInt(acc.value) + valorAtual;
    } else {
      return valorAtual - parseInt(acc.value);
    }
  }, 0);

  return (
    <div className="container_full">
      <h3>Valor total:</h3> <p>$ {resultComplet}</p>
    </div>
  );
};
