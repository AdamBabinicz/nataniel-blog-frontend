const HeaderLeft = ({ setToggle, toggle }) => {
  return (
    <div className="header-left">
      <div className="header-logo">
        <strong>BLOG</strong>
        <i className="bi bi-pencil-fill"></i>
      </div>
      <div onClick={() => setToggle(!toggle)} className="header-menu">
        {toggle ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
      </div>
    </div>
  );
};

export default HeaderLeft;
