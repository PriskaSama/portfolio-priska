import Navbar from "@src/components/layouts/navbar";
import Footer from "@src/components/layouts/footer";
import About from "@src/components/layouts/about";

let styles = {
  main: "h-min"
}

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main className={styles.main} >{children}</main>
      <About />
      <Footer />
    </>
  );
};

export default Layout;