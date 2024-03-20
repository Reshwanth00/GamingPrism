import logo from './logo.svg';
import './App.css';
import Left from './Left';
import Right from './Right';
function App() {
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <Left />
      </div>
      <div className="rightContainer">
        <Right />
      </div>
      
    </div>
  );
}

export default App;
