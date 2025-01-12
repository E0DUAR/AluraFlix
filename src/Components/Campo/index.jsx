import styles from "./Campo.module.css";

const Campo = ({ titulo, name, value, onChange, placeholder, type }) => {
  if (type === "textArea") {
    return (
      <div className={styles.campo}>
        <label>{titulo}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  }

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
