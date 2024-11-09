import Hero from "./components/hero/Hero";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
    </div>
  );
}
