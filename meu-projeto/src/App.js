import './App.css';


function App() {
  const name = 'André'
  const newName = name.toUpperCase()

  //Eu posso criar uma função dentro da minha função
  function sum(a, b) {
    return a + b 
    /*usamos quando queremos dar */
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App"> 
      <h2>Alterando o JSX</h2>
      <p>Olá,{newName}</p>
      <p>soma: {sum(1, 2)}</p>
      <img src={url} alt="minha imagem"></img>
      
    </div>
  )
}

export default App;
