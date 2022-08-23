function InputGroupRadio(props) {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <div className="input-group-radio">
      <label className="label-radio" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
      <input
        type="radio"
        name="paymentType"
        id={props.inputId}
        value={props.inputValue}
        //checked={props.inputValue === props.inputId}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputGroupRadio;
