
import './App.css';
import { Display } from './component/Display';
import { List } from './component/List';

function App() {
  return (
    <div className="wrapper min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Know Your Comic Characters</h1>
          </div>
          <hr />
        </div>

        <Display />
        <List />
      </div>
      
    </div>
  );
}

export default App;
