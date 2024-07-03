import React from "react";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home";
import MyProjects from "./pages/myprojects/myprojects";
import Resume from "./pages/myResume/myResume";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function RouterComponent() {
  return (
      <Router>
        <div className="flex flex-col">
          <Header/>
          <div className="w-full">
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/projects" element={<MyProjects/>}></Route>
              <Route path="/resume" element={<Resume/>}></Route>
              {/* <Route path="/*" element={<NotFound404/>}></Route> */}
          </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
  )
}

export default RouterComponent;