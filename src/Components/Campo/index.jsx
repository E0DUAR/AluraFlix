import styles from "./Campo.module.css";

const Campo = ({ titulo, name, value, onChange, placeholder, type }) => {
  return (
    <div className={styles.campo}>
      <label>{titulo}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
