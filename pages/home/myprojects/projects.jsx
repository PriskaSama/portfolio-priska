import Image from "next/image";
import wireframe from "@src/assets/img/integration-wireframe.png";
import landingpage from "@src/assets/img/landingpage.png";
import metadev from "@src/assets/img/metadev.png";
import mazebank from "@src/assets/img/maze-bank.png";
import metadevshop from "@src/assets/img/metadev-shop.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AOS from 'aos';
import "aos/dist/aos.css";

let styles = {
  template: "grid text-left px-8 py-12",
  template2: "flex flex-col justify-center",
  title: "uppercase text-2xl underline pb-20",
  title2: "text-2xl",
  title3: "text-lg italic",
  tasks: "list-none mt-8",
  div1: "py-4",
  divImage: "py-14 flex justify-center",
  text: "pt-4",
};

const Projects = () => {
  return (
    <div className={styles.template}>
      <h1 className={styles.title}>02. Mes projets</h1>
      {/* Project 1 */}
      <div className={styles.div1} data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
        <h2 className={styles.title2}>Intégration wireframe</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p className={styles.text}>Notre tout premier projet par groupe de deux. L&apos;objectif était d&apos;intégrer une maquette préalablement crée.</p>
        <div className={styles.div1}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Elaboration d&apos;un wireframe.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Passage en production.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        <div className={styles.divImage}>
        <Image src={wireframe} alt="Wireframe" height="250" width="250"/>
        </div>
        <div className={styles.divImage}>
          <a href="https://github.com/NAWELC/integration-wireframe"><GitHubIcon sx={{ fontSize: 30 }} /></a>
      <a href="https://priscad.promo-171.codeur.online/landing-page/"><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
        </div>
      </div>
      {/* Project 2 */}
      <div div className={styles.div1} data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
        <h2 className={styles.title2}>Landing page</h2>
        <h3 className={styles.title3}>Projet individuel</h3>
        <p className={styles.text}>Dans ce projet, nous devions expérimenter les différentes phases de réalisation d&apos;un projet web. En passant par l&apos;intégration d&apos;une maquette à son passage en production. Effectuer une version responsive sur mobile, tablette et desktop. Et finalement héberger le site sur un serveur public.</p>
        <div className={styles.divImage}>
        <Image src={landingpage} alt="landingpage" height="350" wdith="350"/>
        </div>
        <div className={styles.divImage}>
          <a href="https://github.com/PriskaSama/landing-page0"><GitHubIcon sx={{ fontSize: 30 }} /></a>
          <a href="https://priscad.promo-171.codeur.online/landing-page0/"><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
        </div>
      </div>
      {/* Project 3 */}
      <div div className={styles.div1} data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
        <h2 className={styles.title2}>Agence web</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p className={styles.text}>Ce projet par groupe de trois, consistait à fonder une agence-web. Les étapes les plus importantes étaient les suivantes:  </p>
        <div className={styles.div1}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Définition de l&apos;identité de l&apos;agence..</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Conception du site.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Développement et hébergement sur Netlify.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        <div className={styles.divImage}>
        <Image src={metadev} alt="metadev" height="400" wdith="250"/>
        </div>
        <div className={styles.divImage}>
          <a href="https://github.com/mrp-171/agenceweb171"><GitHubIcon sx={{ fontSize: 30 }} /></a>
          <a href="https://metadev-mrp.netlify.app/"><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
        </div>
      </div>
      {/* Project 4 */}
      <div div className={styles.div1} data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
        <h2 className={styles.title2}>Maze-Bank</h2>
        <h3 className={styles.title3}>Projet individuel</h3>
        <p className={styles.text}>Ce projet individuel avait pour but de créer une application bancaire fictive. Permettant une introduction a Javascript et tout spécialement à la notion d&apos;algorithmie.</p>
        <div className={styles.div1}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Initiation a Javascript.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Développement d&apos;un algorithme.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Production et hébergement sur Netlify.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        <div className={styles.divImage}>
        <Image src={mazebank} alt="mazebank" height="250" width="350"/>
        </div>
        <div className={styles.divImage}>
          <a href="https://github.com/PriskaSama/maze-bank"><GitHubIcon sx={{ fontSize: 30 }} /></a>
          <a href="https://maze-bank-priska.netlify.app/"><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
        </div>
      </div>
      {/* Project 5 */}
      <div div className={styles.div1} data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
        <h2 className={styles.title2}>TP Boutique</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p className={styles.text}>Projet en lien avec l&apos;agence web. Nous devions créer par groupe de quatre une boutique e-commerce via le CMS Wordpress. </p>
        <div className={styles.div1}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Initiation a Wordpress</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Elaboration d&apos;un wireframe.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Hébergement sur nom de domaine Ionos.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
       <div className={styles.divImage}>
        <Image src={metadevshop} alt="metadevshop" height="250" width="350"/>
       </div>
       <div className={styles.divImage}>
        <a href="https://metadev-mrp.fr/"><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
       </div>
      </div>
    </div>
  );
};

export default Projects;