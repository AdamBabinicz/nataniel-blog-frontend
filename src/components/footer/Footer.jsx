const Footer = () => {
  return (
    <footer style={styles}>Radom 2023 - {new Date().getFullYear()}.</footer>
  );
};

const styles = {
  color: "var(--white-color)",
  fontSize: "21px",
  backgroundColor: "var(--blue-color)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
};

export default Footer;
