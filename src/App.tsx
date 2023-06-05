import { getIcon } from "@mono/utils";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={getIcon()} className="logo" alt="Vite logo" />
      </a>
    </div>
  );
}

export default App;
