import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from './SocialLinks.module.css'

export default function Sociallinks() {
  return (
    <div className={styles.social}>
    <div className={styles.socialIcons}>
      <span className={styles.socialIconsSpan}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconslinks}
          href="https://www.instagram.com/ushaaneelvaswani/"
        >
          <AiOutlineInstagram />
        </a>
      </span>

      <span className={styles.socialIconsSpan}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconslinks}
          href="https://github.com/UshaKumari89"
        >
          <FaGithub />
        </a>
      </span>

      <span className={styles.socialIconsSpan}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconslinks}
          href="https://www.linkedin.com/in/uavaswani/"
        >
          <FaLinkedinIn />
        </a>
      </span>
    </div>
  </div> 
  )
}
