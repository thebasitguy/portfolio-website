import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abdul!</h1>
        <p className={styles.description}>
          I’m a versatile Web Developer and Graphic Designer with expertise in HTML, CSS, JavaScript, and design tools like Adobe Photoshop and Illustrator. I specialize in creating visually appealing, responsive websites and unique digital designs, blending functionality with creativity to deliver exceptional user experiences.
        </p>
        <div className={styles.btnGroup}>
          <a href="/assets/hero/abdulbasitmusah.pdf" download className={styles.downloadBtn}>
            Download CV
          </a>
          <a href="#contact" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
