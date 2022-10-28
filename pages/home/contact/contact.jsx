import Image from "next/image";
import contactme from "@src/assets/img/contactme.png";

let styles = {
  template: "grid text-left px-8 py-12",
  title: "text-2xl uppercase underline pb-20",
  intro: "py-12",
  contactpic: "flex justify-center py-8",
};

const Contacts = () => {
  return (
    // CONTACT DETAILS + FORM TO ADD
    <div className={styles.template}>
      <h1 className={styles.title}>04. Contact</h1>
      <div className={styles.contactpic}>
        <Image src={contactme} alt="contactme" height="180" width="180" />
      </div>
      <p className={styles.intro}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, modi
        nostrum dolor ipsa id minima impedit est atque, quibusdam, quas autem
        tempora cupiditate qui saepe quisquam beatae veritatis architecto
        voluptatum!
      </p>
    </div>
  );
};

export default Contacts;