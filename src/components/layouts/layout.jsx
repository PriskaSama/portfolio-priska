import Navbar from "@src/components/layouts/navbar";
import Footer from "@src/components/layouts/footer";
import About from "@src/components/layouts/about";
import Projects from "@src/components/layouts/projects";
import Contacts from "@src/components/layouts/contact";

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
      <Contacts />
      <Footer />
    </>
  );
};

export default Layout;
