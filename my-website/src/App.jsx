import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Projects from "./Pages/Projects.jsx";
import Gallery from "./Pages/Gallery.jsx";


function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            {/*<Route path='/store' element={<HomePage/>}></Route>*/}

        </Routes>
    </>
  )
}

export default App
