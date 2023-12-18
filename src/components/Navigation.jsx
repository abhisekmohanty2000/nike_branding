const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li className="nav-menu" href="#">Menu</li>
        <li className="nav-loc" href="#">Location</li>
        <li className="nav-about" href="#">About</li>
        <li className="nav-con" href="#">Contact</li>
      </ul>

      <button className="login-btn">login</button>
    </nav>
  );
};

export default Navigation;
