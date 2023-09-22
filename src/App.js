import "./App.css";
import Toggle from "./Toggle";
import { ContextProvider } from "./ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Toggle />
      </ContextProvider>
    </div>
  );
}

export default App;
