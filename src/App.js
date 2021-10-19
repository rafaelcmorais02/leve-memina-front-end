import React, { useState } from "react";
import Nav from "./components/navNar/nav"
import Carousel from "./components/carousel/carousel"
import Footer from "./components/footer/footer"
import Modal from "./components/modal/modal"
import "./style/index.css"

function App() {
  const [id, setId] = useState(0)
  const [flag, setFlag] = useState(false)
  const elemenet = document.getElementById("comp")

  if (flag) {
    console.log("verdadeiro")
    elemenet.style.opacity = 0.2
  }
  else {
    if (elemenet)
      elemenet.style.opacity = 1
    console.log("falso")
  }

  return (
    <>
      <Modal flag={flag} setFlag={setFlag} id={id} />
      <div id="comp" className=".container-fluid">
        <Nav />
        <Carousel setFlag={setFlag} setId={setId} />
        <Footer />
      </div>
    </>
  )
}

export default App;
