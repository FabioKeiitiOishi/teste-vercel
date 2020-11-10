import { useState } from 'react';

function Home() {
  return (
    <div>
      <div>HOME denovo</div>
      <Contador />
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(0);

  function AdicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={AdicionarContador}>Adicionar um</button>
    </div>
  )
}

export default Home;