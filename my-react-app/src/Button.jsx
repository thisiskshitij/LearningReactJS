// import styles from './Button.module.css'


// we doing inline here , good for minimal styling , not good for scale apps difficult maintaining
function Button() {
  const styles = {
    backgroundColor: "hsl(188, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    // <button className="button">Click me</button>
    // <button className={styles.button}>Click me</button>
    <button style={styles}>Click me</button>
  );
}
export default Button;
