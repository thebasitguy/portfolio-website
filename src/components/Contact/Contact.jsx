import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        'service_i80uy9l',
        'template_sbi8ge9',
        form.current,
        'K-FIgOpbC6rEI3c_1'
      )
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required />
        </div>
        <button type="submit" className={styles.submitBtn}>
          {isSent ? "Message Sent!" : "Send Message"}
        </button>
      </form>

      <div className={styles.icons}>
        <a href="mailto:mailbasitgh@gmail.com" className={styles.iconLink}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email icon"
            className={styles.icon}
          />
        </a>
        <a href="https://www.linkedin.com/abdulbasitmusah" className={styles.iconLink}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            className={styles.icon}
          />
        </a>
        <a href="https://www.github.com/thebasitguy" className={styles.iconLink}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="GitHub icon"
            className={styles.icon}
          />
        </a>
      </div>

    </footer>
  );
};
