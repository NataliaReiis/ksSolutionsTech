import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from  '../components/contact/Form';

import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Contact() {
    useEffect(() => {
        // Animação scroll
        const animationsScroll = () => {
          const sr = ScrollReveal({
            origin: "bottom",
            distance: "80px",
            duration: 2000,
            reset: false,
          });
          sr.reveal(
            `
            nav,.contact-container, footer
          `,
            { interval: 500 }
          );
        };
        animationsScroll();
      }, []);
    
      window.setTimeout(() => {
        const home = document.getElementsByClassName(".contact-container");
        home[0].computedStyleMap.transform = "none";
        const nav = document.getElementsByName("nav");
        nav[0].style.transform = "none";
      }, 1500);
    return(
        <>
           <Navbar />
            <Form />
           <Footer />
        </>
    )
}