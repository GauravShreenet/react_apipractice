
import { useState } from 'react';
import './App.css';
import { DarkMode } from './component/DarkMode';
import { Display } from './component/Display';
import { Footer } from './component/Footer';
import { List } from './component/List';

function App() {
  const [characterList, setCharacterList] = useState([]);

  const addCharacterList = (character) => {
    const noRepeat = characterList.filter((item) => item.id !== character.id)
    setCharacterList([
      ...noRepeat, character
    ])
  }


  return (
    <div className="wrapper min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Know Your Marvel Characters</h1>
            <DarkMode />
          </div>
          <hr />
        </div>

        <Display addCharacterList={addCharacterList}/>
        <List characterList={characterList}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
