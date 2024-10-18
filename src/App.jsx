import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/hero'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
function App() {

  return (
   <main className="bg-scroll flex flex-col ">
      <Navbar/>
      <Hero/>
      <Footer className="flex justify-start"/>
      <Page2/>
      <Page3/>
   </main>
  )
}

export default App
