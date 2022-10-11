import Navbar from "@src/components/layouts/navbar";
import Footer from "@src/components/layouts/footer";
import About from "@src/components/layouts/about";
import Projects from "@src/components/layouts/projects";

let styles = {
  main: "h-min",
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Layout;
