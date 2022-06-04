import React, { ReactEventHandler, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [sobName, setSobName] = useState("");
  const [idade, setIdade] = useState("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSobNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobName(event.target.value);
  };
  const handleIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdade(event.target.value);
  };
  return (
    <div>
      <div>
        Nome:
        <input
          type="text"
          value={name}
          placeholder="Digite seu nome aqui..."
          onChange={handleName}
        />
      </div>
      <div>
        Sobrenome:
        <input
          type="text"
          value={sobName}
          placeholder="Digite seu sobrenome aqui..."
          onChange={handleSobNome}
        />
      </div>
      <div>
        Idade:
        <input
          type="text"
          value={idade}
          placeholder="Digite sua idade..."
          onChange={handleIdade}
        />
      </div>
      <hr />
      Olá {name} {sobName}, tudo bem?
      <br />
      Você tem {idade} anos.
    </div>
  );
};

export default App;
