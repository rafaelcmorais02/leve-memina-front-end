import React from "react";
import Card from "./components/cards/cardItems";
import Nav from "./components/navNar/nav"
import cardData from "./data/cards/cardData"
import Introd from "./components/cards/cardIntroduction"
import Footer from "./components/footer/footer"
import "./style/index.css"

function App() {
  return (
    <>
      <Nav />
      <Introd />
      <div className="containerCard">
        <section className="column">
          {cardData.map((element) => {
            return (
              <div key={element.id}>
                <Card className="card" title={element.title} descricao={element.descricao} image={element.img} />
              </div>
            )
          })}
        </section >
      </div>
      <Footer />
    </>
  )
}

export default App;
