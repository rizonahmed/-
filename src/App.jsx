import Card from '../Card'
import Rainbow from '../Rainbow'
import Actor from './Actor'
import './App.css'
import Cards from './Cards'
import Chart from './Chart'
import Footer from './Footer'
import Hero from './Hero'
import Money from './Money'

function App() {

  return (
    <>
      <div>
        <Hero></Hero>

        <Money></Money>
        <Actor></Actor>
        <Rainbow></Rainbow>
        <Card></Card>
        <Chart></Chart>
        <Cards></Cards>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
