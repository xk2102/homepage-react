import "./App.css";
import info from "./info.json";
import Group from "./components/Group";

function App() {
  return (
    <div className="App">
      <div className="container">
        {info.groups.map((group, index) => (
          <Group group={group} key={index}></Group>
        ))}
      </div>
    </div>
  );
}

export default App;
