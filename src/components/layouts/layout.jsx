import Navbar from "@pages/home/navbar/navbar";
import Intro from "@pages/home/intro/intro";
import About from "@pages/home/about/about";
import Projects from "@pages/home/myprojects/projects";
import Contacts from "@pages/home/contact/contact";
import Footer from "@pages/home/footer/footer";
import Roadmap from "@pages/home/roadmap/roadmap";

let styles = {
  main: "h-min",
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Intro />
      <About />
      <Projects />
      <Roadmap />
      <Contacts />
      <Footer />
    </>
  );
};

export default Layout;
