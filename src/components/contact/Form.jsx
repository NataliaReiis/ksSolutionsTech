import { useForm, ValidationError } from "@formspree/react";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Form() {
  const [state, handleSubmit] = useForm("xnqkevvd"); /* Formulario */
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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
        <form onSubmit={handleSubmit} className="form">
          <h3>Tem interesse em...</h3>
          <div className="checkbox">
            <span>
              <input type="checkbox" />
              <label className="checkbox-label">teste</label>
            </span>
          </div>
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
              Enviar menssagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
