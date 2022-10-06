import Image from "next/Image";
import Logo from "@src/assets/img/cat.jpg";

let styles = {
  title: "uppercase underline text-center text-3xl py-10",
  template: "grid grid-cols-3",
  template1: "flex flex-col bg-violet-400",
  template2: "flex flex-row bg-indigo-400",
  button: "flex flex-row w-full justify-center py-10",
};

const Content = () => {
  return (
    <>
    <Image src={Logo} alt="logo" />
      <h1 className={styles.title}>Hello content!</h1>
      <div className={styles.template}>
        {/* COL 1 */}
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quod iure rerum, recusandae molestias ut perspiciatis sed voluptates
            obcaecati incidunt! Voluptas ea numquam rem laborum, quidem vel
            deleniti ex incidunt.
          </p>
          <div className={styles.button}>
          <button>Click</button>
          </div>
        </div>
        {/* COL 2 */}
        <div className={styles.template2}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit
            deserunt placeat quibusdam totam quos sapiente accusantium in. Sint
            incidunt rem voluptatibus aliquid eos perferendis, nemo reiciendis
            minus ut dolorum.
          </p>
          <img src="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg" alt=""/>
        </div>
        {/* COL 3 */}
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            porro ipsa odit accusantium! Nesciunt, suscipit iure, velit odio
            natus unde sapiente impedit odit at architecto quod, repudiandae
            quisquam cupiditate eum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
