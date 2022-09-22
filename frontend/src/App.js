import axios from "axios";
import AuthPage from "./pages/AuthPage";
import "./App.css";

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  return (
    <div className="App">
      <AuthPage />
    </div>
  );
}

export default App;
