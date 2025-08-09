export default function UserInput({ type, text, value, onValueChange }) {
  const handleValueChange = function (e) {
    onValueChange(type, Number(e.target.value));
  };

  return (
    <p>
      <label htmlFor={text.split(" ")[0]}>{text}</label>
      <input
        name={text.split(" ")[0]}
        id={text.split(" ")[0]}
        type="number"
        value={value}
        onChange={handleValueChange}
        required
      />
    </p>
  );
}
