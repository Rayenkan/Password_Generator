import './App.css';
import GenPass from './password_gen'; // Correct name for the imported component

function App() {
  return (
    <div className="App" class="border-1 ">
      <h1 class="text-3xl font-extrabold text-gray-300 uppercase pt-12 pb-4 border-b-2 border-black" >Password Generator</h1>
      <GenPass />
    </div>
  );
}

export default App;
