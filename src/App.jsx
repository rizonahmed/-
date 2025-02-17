import Card from '../Card'
import Rainbow from '../Rainbow'
import Actor from './Actor'
import './App.css'
import Cards from './Cards'
import Chart from './Chart'
import Footer from './Footer'
import Hero from './Hero'
import Marque from './Marque'
import Money from './Money'

function App() {

  return (
    <>
      <div className='overflow-clip'>
        <Hero></Hero>
        <Marque></Marque>
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
