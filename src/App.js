// import logo from "./logo.svg";
import dad from "./dad.png";
import "./App.css";
import Joke from "./components/jokes";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={dad} className="App-logo" alt="logo" elevation={3} />
        <p>
          Hello there !<br />I got somethin for ya son...
        </p>
        <Joke />
      </div>
    </div>
  );
}

export default App;
