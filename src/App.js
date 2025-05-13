import logo from "./logo.svg";
import "./App.css";
import LoanAppForm from "./LoanAppForm";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alingItems: "center",
        marginTop: "30px",
      }}
    >
      <LoanAppForm />
    </div>
  );
}

export default App;
