import Image from "next/image";
import mermaid from "@src/assets/img/mermaid.png";
import priskachill from "@src/assets/img/chill-working.png";

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
    <h1 className={styles.title} id="mon-parcours">03. Mon parcours</h1>
    <div className={styles.img}>
        <Image src={priskachill} alt="logo" height="250" width="250" />
      </div>
    <section class="text-gray-400 body-font" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110">
        <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-white mb-1 text-xl">LOREM</h2>
          <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officia pariatur laborum quasi facilis est aperiam, laudantium sequi quidem voluptatibus consequatur quas ipsam deserunt fugiat. Quidem eveniet culpa ratione perspiciatis.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110">
        <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-white mb-1 text-xl">LOREM</h2>
          <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut officia voluptates ullam sed laboriosam ad eligendi quibusdam, dolor molestias placeat magni, ratione eaque? Numquam asperiores commodi excepturi quod perspiciatis.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110">
        <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-white mb-1 text-xl">LOREM</h2>
          <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eos itaque, consectetur consequatur natus alias hic corrupti consequuntur corporis officiis similique nihil nisi a sequi recusandae, laborum dolore error quae.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110">
        <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-white mb-1 text-xl">LOREM</h2>
          <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus molestiae vel velit accusantium ratione maiores voluptates saepe nihil, explicabo expedita commodi voluptatum possimus soluta voluptas sapiente repudiandae maxime dignissimos?</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>

  );
};

export default Roadmap;