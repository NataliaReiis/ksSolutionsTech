import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import LogoColorida from "../assets/img/logoColorida.png";

export default function About() {
    return(
        <>
           <Navbar logo={LogoColorida} colortxt="#010615" bg="white" />

           <Footer />
        </>
    )
}