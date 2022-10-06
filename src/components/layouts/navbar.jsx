let styles = {
  navbar: "flex flex-row bg-black text-white",
  ul: "uppercase",
  logo: "h-auto w-20 lg:w-80"
};

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"
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