import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Projects from "./Pages/Projects.jsx";
import Gallery from "./Pages/Gallery.jsx";
import {AboutMe} from "./Pages/AboutMe.jsx";
import {ContactMe} from "./Pages/ContactMe.jsx";


function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/gallery' element={<Gallery/>}></Route>
                <Route path='/about-me' element={<AboutMe/>}></Route>
                <Route path='/contact-me' element={<ContactMe/>}></Route>
            </Routes>
        </>
    );
}

export default App
