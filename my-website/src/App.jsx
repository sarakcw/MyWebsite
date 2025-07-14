import Header from "./Header/Header.jsx";
import Window from "./Window/Window.jsx";
import Background from "./assets/Home - Background.svg";

function App() {

  return (
    <>
        <div className="page-container">
            <img className = "background" src={Background}></img>

          <Header />
            <Window/>
        </div>
    </>
  )
}

export default App
