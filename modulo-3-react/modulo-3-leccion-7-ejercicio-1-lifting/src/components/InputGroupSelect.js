function InputGroupSelect(props) {
  const handleSelectChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <div className="input-group-select">
      <label className="label-text" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <select
        className="input-select"
        name={props.inputName}
        id={props.inputId}
        value={props.inputValue}
        onChange={handleSelectChange}
      >
        <option>España peninsular</option>
        <option>Islas Canarias</option>
        <option>Islas Baleares</option>
        <option>Ceuta</option>
        <option>Melilla</option>
      </select>
    </div>
  );
}

export default InputGroupSelect;
