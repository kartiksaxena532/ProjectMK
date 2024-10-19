import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/hero'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
import FooterMain from './components/footer/FooterMain'
import Video from './components/Video'
function App() {

  return (
   <main className="bg-scroll flex flex-col ">
      <Navbar/>
      <Hero/>
      <Footer className="flex justify-start"/>
      <Video/>
      <Page2/>
      <Page3/>
      <FooterMain/>
   </main>
  )
}

export default App
