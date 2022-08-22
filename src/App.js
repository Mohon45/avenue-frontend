import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home";
import Notify from "./shared/Notify/Notify";

function App() {
  return (
    <div className="App">
      <Home />
      <Notify />
    </div>
  );
}

export default App;
