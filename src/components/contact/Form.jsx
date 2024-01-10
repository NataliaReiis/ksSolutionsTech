import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Form() {

  const [state, handleSubmit] = useForm('xnqkevvd', {
      redirect: false, 
  }); /* Formulario */
  const [showMensager, setShowMensager] = useState(false)
  
  const submitForm = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      setShowMensager(true);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-infos-container">
        <h1>Desvende o potencial do seu negócio: Tire suas dúvidas!</h1>
        <div className="infos">
          <span>
            <MailOutlineOutlinedIcon />
            <p>contato@kssolutions.tech</p>
          </span>
          <span>
            <WhatsAppIcon />
            <p>(71)99412-0997</p>
          </span>
          <span>
            <LocationOnOutlinedIcon />
            <p>
              Edifício Macêdo - R. Francisco Drumond, 41 - Centro, Camaçari -
              BA, 42800-063
            </p>
          </span>
        </div>
      </div>
      <div className="contact-form-container">
   <form onSubmit={submitForm} className="form">
          <h3>Como podemos ajudar o seu negócio? Nos envie uma mensagem:</h3>
          <div className="form-msg">
            <label htmlFor="name">Seu nome:</label>
            <input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email">Seu melhor e-mail:</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Enviar mensagem
            </button>
          </div>
          {showMensager && <p>A ks Agradeçe a sua mensagem!</p>}
        </form>
      </div>
    </div>
  );
}
