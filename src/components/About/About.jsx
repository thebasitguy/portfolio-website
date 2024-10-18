import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              I’m a skilled Web Developer specializing in HTML, CSS, JavaScript, and React, with a focus on building responsive, user-friendly websites. I’m passionate about creating clean, efficient code and leveraging modern frameworks like React to deliver dynamic, interactive digital experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Graphic Designer</h3>
              <p>
              I’m a creative Graphic Designer with expertise in crafting visually compelling designs using tools like Adobe Photoshop and Illustrator. I specialize in developing unique branding and digital assets, blending creativity with strategy to help businesses communicate their message effectively and stand out in the market.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
