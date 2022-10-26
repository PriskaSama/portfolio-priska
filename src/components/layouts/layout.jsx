import Navbar from "@pages/home/navbar/navbar";
import Footer from "@pages/home/footer/footer";
import About from "@pages/home/about/about";
import Projects from "@pages/home/myprojects/projects";
import Contacts from "@pages/home/contact/contact";

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
