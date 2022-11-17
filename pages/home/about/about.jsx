import Image from "next/image";
import priskachill from "@src/assets/img/chill-working.png";

let styles = {
  template: "grid text-left px-8 py-12 bg-black text-white",
  skills: "grid grid-cols-2 gap-8 list-none uppercase py-20",
  profilepic: "flex justify-center py-8",
  title: "text-2xl uppercase underline pb-20",
  spacebtw: "mt-8",
  title2: "text-xl uppercase pb-20 lg:text-3xl text-gray-200",
  hoverzoom: "hover:scale-100",
};

const About = () => {
  return (
    // ABOUT ZONE
    <div id="about" className={styles.template}>
      <h2 className={styles.title} id="a-propos">01. A propos</h2>
      <section class="text-gray-300 body-font" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-col text-left w-full mb-20 lg:text-center">
      <p className={styles.title2}>
        Salut! Moi c&apos;est Priska - LOREM
      </p>
      <p>TOOLS UTILISES</p>
      <p>Ce que je fais aujourd&apos;hui, ce que je cherche</p>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base mt-8">Voici la stack technique sur laquelle je travail:</p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"></img>
          <div class="flex-grow">
            <h2 class="text-gray-200 title-font font-medium">HTML</h2>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"></img>
          <div class="flex-grow">
            <h2 class="text-gray-200 title-font font-medium">CSS</h2>
            <p class="text-gray-300">SASS</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"></img>
          <div class="flex-grow">
            <h2 class="text-gray-200 title-font font-medium">JAVASCRIPT</h2>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"></img>
          <div class="flex-grow">
            <h2 class="text-gray-200 title-font font-medium">PHP</h2>
            <p>MySQL</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"></img>
          <div class="flex-grow">
            <h2 class="text-gray-200 title-font font-medium">WORDPRESS</h2>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"></img>
          <div class="flex-grow">
            <h2 class="text-gray-200title-font font-medium">TAILWIND CSS</h2>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"></img>
          <div class="flex-grow">
            <h2 class="text-gray-200 title-font font-medium">NODE.JS</h2>
            <p class="text-gray-300">REACT.JS</p>
            <p class="text-gray-300">NEXT.JS</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"></img>
          <div class="flex-grow">
            <h2 class="text-gray-200 title-font font-medium">SYMFONY</h2>
            <p class="text-gray-300">EXPRESS.JS</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"></img>
          <div class="flex-grow">
            <h2 class="text-gray-200 title-font font-medium">BOOTSTRAP</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;