import React, { useState } from "react";
import Nav from "./components/navNar/nav"
import Carousel from "./components/carousel/carousel"
import Footer from "./components/footer/footer"
import Modal from "./components/modal/modal"
import "./style/index.css"

function App() {
  const [flag, setFlag] = useState(false)
  if (flag)
    console.log("verdadeiro")
  else
    console.log("falso")

  return (
    <div className=".container-fluid">
      <Modal flag={flag} setFlag={setFlag} />
      <div className="zIndex">
        <Nav />
        <Carousel setFlag={setFlag} />
        <Footer />
      </div>
    </div>
  )
}

export default App;
