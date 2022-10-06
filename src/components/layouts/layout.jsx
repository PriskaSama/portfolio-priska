import Navbar from "@src/components/layouts/navbar";
import Footer from "@src/components/layouts/footer";

let styles = {
  main: "h-screen"
}

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main className={styles.main} >{children}</main>
      <Footer />
    </>
  );
};

export default Layout;