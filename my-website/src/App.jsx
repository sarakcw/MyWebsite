import Header from "./Components/Header.jsx";
import WindowHome from "./Components/WindowHome.jsx";
import Background from "./assets/Home - Background.svg";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Projects from "./Pages/Projects.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            {/*<Route path='/gallery' element={<Gallery/>}></Route>*/}
            {/*<Route path='/store' element={<HomePage/>}></Route>*/}

        </Routes>
    </>
  )
}

export default App
