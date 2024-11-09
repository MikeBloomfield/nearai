"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import cn from "classnames";

import LogoIcon from "@images/main/logo.svg";
import TwitterIcon from "@images/icons/twitter.svg";
import ArrowIcon from "@images/icons/Icon-Link.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = useCallback(() => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.add("menu-open");
    }
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    const body = document.querySelector("body");
    setIsMenuOpen(false);
    if (body) {
      body.classList.remove("menu-open");
    }
  }, []);

  const handleMenuClick = useCallback(() => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isMenuOpen, openMenu, closeMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(styles.header, { [styles.scrolled]: isScrolled })}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <div className={cn(styles.menu, { [styles.open]: isMenuOpen })}>
          <div className={styles.links}>
            <Link href="https://app.near.ai/chat" className={styles.link} onClick={closeMenu}>
              Research Hub
              <span className={styles.icon}>
                <ArrowIcon />
              </span>
            </Link>
            <Link href="https://chat.near.ai/chat" className={styles.link} onClick={closeMenu}>
              AI Assistant <span className={styles.green}>Alpha</span>
              <span className={styles.icon}>
                <ArrowIcon />
              </span>
            </Link>
            <Link
              href="https://www.youtube.com/playlist?list=PL9tzQn_TEuFWMuPiQOXhaE5lpOTnxLPZY"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={closeMenu}
            >
              AI Office Hours
              <span className={styles.icon}>
                <ArrowIcon />
              </span>
            </Link>
            <Link href="https://near.ai/about" className={styles.link} onClick={closeMenu}>
              About
              <span className={styles.icon}>
                <ArrowIcon />
              </span>
            </Link>
          </div>
          <Link href="https://x.com/near_ai" className={styles.social} onClick={closeMenu} target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </Link>
        </div>
        <div className={cn(styles.menu_button, { [styles.open]: isMenuOpen })} onClick={handleMenuClick}>
          <span className={cn(styles.line, styles.line_1)}></span>
          <span className={cn(styles.line, styles.line_2)}></span>
          <span className={cn(styles.line, styles.line_3)}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
