import Header from "./Header/Header.jsx";
import WindowHome from "./Window/WindowHome.jsx";
import Background from "./assets/Home - Background.svg";

function App() {

  return (
    <>
        <div className="page-container">
            <img className = "background" src={Background}></img>

          <Header />
            <WindowHome/>
        </div>
    </>
  )
}

export default App
