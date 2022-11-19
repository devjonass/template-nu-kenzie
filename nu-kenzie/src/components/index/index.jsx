import "./styles.css";

export const Index = ({ setIndex }) => {
  return (
    <div className="container_index">
      <section className="container_text">
        <img src="./nuKenzie.svg" alt="logo Nu-Kenzie" />
        <h2>Centralize o controle das suas finanças</h2>
        <h6>de forma rápida e segura</h6>
        <button onClick={() => setIndex(false)}>Iniciar</button>
      </section>
      <section className="animation_kenzie">
        <img src="./animation.png" alt="animação ao lado da logo nukenzie" />
      </section>
    </div>
  );
};
