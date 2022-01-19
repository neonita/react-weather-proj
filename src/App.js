import "./App.css";
import Weather from "./Weather";

function App() {
  function change(govName) {
    govName.target.innerHTML = `мεℓιssα вαησεη-gαя∂ε (◔◡◔)`;
  }

  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer className="mt-3 ms-3">
          This project was coded by{" "}
          <a
            href="https://github.com/neonita"
            className="primary-link"
            rel="noopener noreferrer"
          >
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
          <a
            href="https://github.com/neonita/react-weather-proj"
            className="primary-link"
            rel="noopener norefferer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
