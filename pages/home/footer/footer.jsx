let styles = {
  template1: "bg-black w-full mt-auto h-28 flex justify-center items-center ",
  template2: "text-white text-center",
}

const Footer = () => {
  return (
    <footer className={styles.template1}>
      <div className={styles.template2}>
        <div>
          <p>
            © 2022 - Priska Derville
          </p>
          <p>Made with my blood & tears🩸😭</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;