// Fichero src/components/App.js
import { useState } from "react";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupText from "./InputGroupText";
import InputGroupRadio from "./InputGroupRadio";
import Preview from "./Preview";
import LegalTerms from "./LegalTerms";

const App = () => {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (value) => {
    setName(value); //ya no le pasan todo el evento, solo el value
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };

  // Funciones que nos ayudan a renderizar
  //en componente Preview

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <InputGroupText
            labelText="Escribe un nombre:"
            inputType="text"
            inputName="name"
            inputId="name"
            inputPlaceholder="María García"
            inputValue={name}
            handleChange={handleName}
          />
          {/*estamos haciendo este componente reutilizable*/}
          {/* email */}
          <InputGroupText
            labelText="Escribe un email:"
            inputType="email"
            inputName="email"
            inputId="email"
            inputPlaceholder="mariagarcia@gmail.com"
            inputValue={email}
            handleChange={handleEmail}
          />
          {/* region */}
          <InputGroupSelect
            labelText="Indica tu región:"
            inputName="region"
            inputId="region"
            inputValue={region}
            handleChange={handleRegion}
          />
          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>
          <InputGroupRadio
            inputValue={paymentType}
            inputId="creditCard"
            labelText="Tarjeta de crédito"
            handleChange={handlePaymentType}
          />
          <InputGroupRadio
            inputValue={paymentType}
            inputId="cash"
            labelText="Efectivo"
            handleChange={handlePaymentType}
          />
          <InputGroupRadio
            inputValue={paymentType}
            inputId="cashOnDelivery"
            labelText="Contra reembolso"
            handleChange={handlePaymentType}
          />
          {/* legal terms */}
          <LegalTerms
            inputChecked={legalTerms}
            handleChange={handleLegalTerms}
          />
        </div>

        <Preview
          name={name}
          email={email}
          region={region}
          paymentType={paymentType}
          legalTerms={legalTerms}
        />

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <input
          className="button"
          type="submit"
          value="Enviar"
          disabled={isValidForm() === false}
        />

        {/* send */}
        <button className="button reset" onClick={handleResetButton}>
          Limpiar el formulario
        </button>
      </form>
    </div>
  );
};

export default App;
