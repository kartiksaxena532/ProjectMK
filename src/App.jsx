import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/hero'


function App() {

  return (
   <main className="bg-scroll flex flex-col ">
      <Navbar/>
      <Hero/>
      <Footer className="flex justify-start"/>
   </main>
  )
}

export default App
