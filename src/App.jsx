import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/hero'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
import Pagetext from './components/Page3/Pagetext'
import FooterMain from './components/footer/FooterMain'
import Video from './components/Video'
function App() {

  return (
    <main className="bg-scroll -mx-4 -mb-4 flex flex-col ">
      <Navbar />
      <Hero />
      <Footer className="flex justify-start" />
      <Video />
      <Page2 />
      <Pagetext/>
      <Page3/>
      <FooterMain />
    </main>
  )
}

export default App
