let styles = {
  navbar: "flex bg-black text-white",
  ul: "uppercase",
  logo: "h-auto w-20 lg:w-80"
};

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div>
        <img
          src="../../assets/img/pp-keyboard.png"
          alt=""
          className={styles.logo}
        />
      </div>
      {/* NAV BAR */}
      <div>
        <ul className={styles.ul}>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;