import './App.css';
import person from './person.json';

function App() {
  let numPeson = prompt("Choose person 1-10");
  if(numPeson > 0 && numPeson < 11){
    return (
      <div className='box'>
        <h2 className='box-id'>ID: {person[numPeson-1]["id"]}</h2>
        <h1 className='box-name'>Name: {person[numPeson-1]["name"]}</h1>
        <h2 className='box-status'>Status: {person[numPeson-1]["status"]}</h2>
        <h2 className='box-spec'>Species: {person[numPeson-1]["species"]}</h2>
        <h2 className='box-gend'>Gender: {person[numPeson-1]["gender"]}</h2>
        <h2 className='box-image' >Image: {person[numPeson-1]["image"]}</h2>
      </div>
    );
  }
  
}

export default App;
