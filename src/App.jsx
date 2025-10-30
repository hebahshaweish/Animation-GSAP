import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all' /* add manually */
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/about';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';



gsap.registerPlugin(ScrollTrigger , SplitText); /* add manually */
const App = () => {
  return (
    // this is the main part of the content
<main> 
    {/* self closing  component  */}
    <Navbar />  
        <Hero />  
<Cocktails />
<About />
<Art />
<Menu />
<Contact />
    </main>
  )
}

export default App