import cn from "classnames";

import styles from "./hero.module.scss";

import LogoImage from "@images/main/hero-logo.svg";

import Link from 'next/link'

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={cn('wrapper', styles.wrapper)}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <div className={styles.logo_image}>
              <LogoImage />
            </div>
          </div>
          <h1 className={styles.title}>NEAR.AI</h1>
          <h3 className={styles.subtitle}>A manifesto for Open Source and User-owned AGI</h3>
        </div>

        <div className={cn(styles.description, 'text-container')}>
          <Link href="https://app.near.ai" className="default-button">
            <span className="default-button__border"></span>
            <span className="default-button__main">
              <p>Research Hub</p>
            </span>
          </Link>
          <Link href="https://chat.near.ai" className="default-button">
            <span className="default-button__border"></span>
            <span className="default-button__main">
              <p>AI Assistant</p>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
