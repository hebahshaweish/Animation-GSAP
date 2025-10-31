import React from 'react'
import gsap from 'gsap'
import { navLinks } from '../../constants'
import { useGSAP } from "@gsap/react";


const Navbar = () => {

useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      });
},[]);

  return (
<nav>
<div>

<a href="#home" className="flex items-center gap-2">
    <img src="images/logo.png" alt="logo"/>
    <p>Haboosh</p>
</a>

<ul>
    {/* {Navlinks.map((link) => { return (<li></li>)}   with return
{Navlinks.map((link) => (<li></li>))}   automatically return ussing perentacy*/}


{navLinks.map((link) => (
    // since you are maping this li has to have a key
    <li key={link.id}>
        <a href={`#${link.id}`}>{link.title}</a>
    </li>
    
    ))} 
</ul>
</div>
</nav>
  )
}

export default Navbar