import "./App.css";
import Weather from "./Weather";

function App() {
  function change(govName) {
    govName.target.innerHTML = `мεℓιssα вαησεη-gαя∂ε (◔◡◔)`;
  }

  return (
    <div className="App">
      <Weather />
      <div className="container">
        <footer>
          This project was coded by{" "}
          <a href="/" className="primary-link">
            <span
              onMouseOver={change}
              onMouseLeave={(displayedName) =>
                (displayedName.target.innerHTML = `Neonita`)
              }
            >
              Neonita
            </span>
          </a>{" "}
          and is{" "}
          <a href="/" target="noopener norefferer" className="primary-link">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
