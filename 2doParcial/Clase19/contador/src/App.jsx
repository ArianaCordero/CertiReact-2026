import './App.css';

let contador = 0;

const contar = () => {
  contador = contador++;
};

function App() {
  return (
    <button onClick={contar}>
      {contador}
    </button>
  );
}

export default App;