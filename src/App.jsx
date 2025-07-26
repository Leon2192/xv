import './App.css'
import Hero from "./components/Hero/HeroPremium"
import Countdown from "./components/CountDown/CountDownPremium"
import InfoEvent from "./components/InfoEvent"
import Gallery from "./components/Gallery/GalleryPremium"
import Gift from "./components/Gift"
import Confirm from "./components/Confirm"
import Footer from "./components/Footer"
import Dresscode from "./components/Dresscode"
import SuggestSong from "./components/SugerirCancion"
import Qr from "./components/QR"

function App() {


  return (
    <>
    <Hero />
    <Countdown />
    <InfoEvent />
    <Gallery/>
    <Qr/>
    <Gift/>
  
    <Confirm/>
    <Dresscode/>
    <SuggestSong/>
    <Footer/>
    </>
  )
}

export default App
