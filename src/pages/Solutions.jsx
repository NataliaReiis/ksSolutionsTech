import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import construct from "../assets/svg/construct.svg";

export default function Solutions() {
  return (
    <div  className="solutions-container">
      <Navbar />
      <div style={{textAlign:'center', margin:'5rem 0'}} className="construction-container">
        <h1 style={{color: '#0C1633', fontSize:'1.5em', margin:'3rem 0'}}>Essa Página está em construção</h1>
        <img style={{width: '100%'}} src={construct} alt="" />
      </div>

      <Footer />
    </div>
  );
}
