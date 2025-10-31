import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { SplitText  } from 'gsap/all'
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
 const videoRef = useRef();
 const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(()=>{
    const herosplit = new SplitText('.title', {type:'chars,words'});
    const paragraphsplit = new SplitText('.subtitle',{type:'lines'});
    herosplit.chars.forEach((char)=>char.classList.add('text-gradient'));

    gsap.from(herosplit.chars,{
        yPercent:100,
        duration:1.8,
        ease:'expo.out',
        stagger:0.06  // الفرق الزمني بين كل انيميشين لكل حرف 
    });

    gsap.from(paragraphsplit.lines,{
        opacity:0,
        yPercent:100,
        duration:1.8,
        ease:'expo.out',
        stagger:0.06,
        delay:1
    })
	gsap
	.timeline({ // for moving up and down 
	 scrollTrigger: {   // type of trigger of that applicatin 
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true, // animated on scroll 
	 },
	})
	.to(".right-leaf", { y: 200 }, 0)
	.to(".left-leaf", { y: -200 }, 0);


	const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";
	
	const tl = gsap.timeline({   // create new variable for the timeline not refer to the timeline ref
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true, // allow scroll 
		pin: true, // vedio stuck in scroll 
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {  // create callback function depend on segment send by mouse wheal
	 tl.to(videoRef.current, {  //  update the current time base in vedio duration 
		currentTime: videoRef.current.duration,
	 });
	};


    },[]);
  return (
//     empty react fregment
  <>
 <section id="hero" className="noisy">
		<h1 className="title">MOJITO</h1>
		
		<img
		 src="/Animation-GSAP/images/hero-left-leaf.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="/Animation-GSAP/images/hero-right-leaf.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
		
		<div className="body">
		 {/* <img src="/Animation-GSAP/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>Cool. Crisp. Classic.</p>
			 <p className="subtitle">
				Sip the Spirit <br /> of Summer
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Every cocktail on our menu is a blend of premium ingredients,
				creative flair, and timeless recipes — designed to delight your
				senses.
			 </p>
			 <a href="#cocktails">View cocktails</a>
			</div>
		 </div>
		</div>
	 </section>

 <div className="video absolute inset-0">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/Animation-GSAP/videos/output.mp4"
		/>
	 </div>
</>
  )
}

export default Hero