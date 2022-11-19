import { useState } from "react";
import "./App.css";
import { Index } from "./components/index";
import { DashBoard } from "./components/Dashboard/index";

export const App = () => {
  const [listTransactions, setListTransactions] = useState([]);
  const [index, setIndex] = useState(true);
  return (
    <div className="App">
      {index ? (
        <Index setIndex={setIndex} />
      ) : (
        <DashBoard
          setIndex={setIndex}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
};
