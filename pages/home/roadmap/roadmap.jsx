import Image from "next/image";
import mermaid from "@src/assets/img/mermaid.png";

let styles = {
  template : "grid text-left bg-black text-white px-8 py-12",
  title : "uppercase underline pb-20 text-2xl",
  img : "flex justify-center py-8",
  text :"py-12",
  space : "py-4"
};

const Roadmap = () => {
  return (
    // ROADMAP, SUMMARIZE CV
    <main className={styles.template}>
    <h1 className={styles.title}>03. Mon parcours</h1>
    <div className={styles.img}>
    <Image src={mermaid} alt="mermaid" height="250" width="250" />
    </div>
  <div className={styles.text}>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fuga vitae quas maiores consequatur repudiandae aut, doloremque natus ipsam voluptatibus aliquam maxime quae aliquid, dolorem quia dolor ad rerum qui.</p>
    <p className={styles.space}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fuga vitae quas maiores consequatur repudiandae aut, doloremque natus ipsam voluptatibus aliquam maxime quae aliquid, dolorem quia dolor ad rerum qui.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fuga vitae quas maiores consequatur repudiandae aut, doloremque natus ipsam voluptatibus aliquam maxime quae aliquid, dolorem quia dolor ad rerum qui.</p>
  </div>
    </main>

  );
};

export default Roadmap;