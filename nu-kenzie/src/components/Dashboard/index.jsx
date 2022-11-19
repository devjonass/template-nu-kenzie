import "./styles.css";
import { Form } from "../Form/index";
import { CardsFill } from "../Card_empty/index";
import { FullCards } from "../Card_fulls/index";
import { TotalMoney } from "../Total_money/index";

export const DashBoard = ({
  setIndex,
  listTransactions,
  setListTransactions,
}) => {
  return (
    <div className="dash_board">
      <section className="header_page">
        <img src="./Nukenzie2.png" alt="logo na dashboard " />
        <button onClick={() => setIndex(true)}>Início</button>
      </section>
      <section className="container_daddy">
        <div className="container_left">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        {listTransactions.length === 0 ? (
          <CardsFill />
        ) : (
          <FullCards
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        )}
      </section>
    </div>
  );
};
