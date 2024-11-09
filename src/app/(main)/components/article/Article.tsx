"use client";
import { useEffect, useRef, useMemo } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useIsUnderBreakpoint } from "@hooks/useIsUnderBreakpoint";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "../animatedElements/animatedText/AnimatedText";
import cn from "classnames";

import styles from "./article.module.scss";

import Author from "./author/Author";
import WebLines from "../../components/animatedElements/webLines/WebLines";
import PeopleBlock from "../../components/animatedElements/peopleBlock/PeopleBlock";

import LockIcon from "@images/icons/Icon-Lock.svg";
import AiIcon from "@images/icons/Icon-AI.svg";
import SadIcon from "@images/icons/Icon-Sad.svg";
import LampIcon from "@images/icons/icon-lamp.svg";

const Article = () => {
  const infoRef1 = useRef(null);
  const infoRef2 = useRef(null);
  const infoRef3 = useRef(null);
  const bigTextRef = useRef(null);

  const isTablet = useIsUnderBreakpoint("lg");

  const infoRefs = useMemo(() => [infoRef1, infoRef2, infoRef3], []);

  useEffect(() => {
    infoRefs.forEach((ref, index) => {
      const element = ref.current;
      const previousElement = index > 0 ? infoRefs[index - 1].current : null;

      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 50%",
            end: "top 50%",
            scrub: true,
            onEnter: () => {
              if (previousElement) {
                gsap.to(previousElement, { opacity: 0, duration: 0.3 });
              }
            },
            onLeaveBack: () => {
              if (previousElement) {
                gsap.to(previousElement, { opacity: 1, duration: 0.1 });
              }
            },
          },
        }
      );
    });

    // if (!isTablet && bigTextRef.current) {
    //   ScrollTrigger.create({
    //     trigger: bigTextRef.current,
    //     start: "top 30%",
    //     end: "+=300",
    //     pin: true,
    //   });
    // }
  }, [isTablet, infoRefs]);

  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.info} ref={infoRef1}>
            <Author />
          </div>
          <div className={styles.main}>
            <div className={cn(styles.description, "text-container")}>
              <AnimatedText>
                I believe<span className="text-gradient">this is wrong</span>. User data should always be owned by the user rather than a line on the
                balance sheet of a distant and remote corporation. User ownership is the only model for AGI that will safeguard data ownership,
                privacy, and <LockIcon /> security. I believe that is something worth fighting for. I hope that you do too, - because I need your help
                to achieve that vision..
              </AnimatedText>
            </div>
            <div className={cn(styles.description_big, styles.description_big_animated)} ref={bigTextRef}>
              <AnimatedText isBig>
                <span className="text-gradient">NEAR</span> is ideally positioned to lead the charge for User Owned AGI.
              </AnimatedText>
            </div>
            <div className={cn(styles.description, "text-container")}>
              <AnimatedText>
                NEAR&apos;s accessibility and scalability has attracted more active users than any other blockchain. With user distribution in the
                tens of millions, a<span className="text-gradient">Web3</span> developer ecosystem that includes a growing number of <AiIcon /> AI
                projects, and a strong balance sheet, NEAR has the resources, networks and capability to shape an alternative user owned future..
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
      <WebLines />
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.info} ref={infoRef2}>
            <Author />
          </div>
          <div className={styles.main}>
            <div className={cn(styles.description, "text-container")}>
              <AnimatedText>
                The AGI technologies we are developing, working with others in the spirit of Open Source
                <Player autoplay={true} loop src="/lottie/code.json" className="text-lottie lottie-code" />
                development, will help overcome core challenges faced in the space such as fragmented products, high development costs, and limited
                developer capacity. By creating the ability to generate new Web3 products from simple language inputs, NEAR’s rapidly emerging
                technology will democratize Web3 development, enabling a major leap forward.
              </AnimatedText>
            </div>
            <div className={cn(styles.description, "text-container")}>
              <AnimatedText>
                But, we will never achieve this working alone <SadIcon />. That is why NEAR.AI development will always be Open Source, providing
                software, datasets, and models to the broader community and combining forces across the AI and Web3 ecosystems. And we will build as a
                non-profit organization, the NEAR Foundation, driven by our core vision of user ownership.
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>

      <PeopleBlock />
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.info} ref={infoRef3}>
            <Author />
          </div>
          <div className={styles.main}>
            <div className={cn(styles.description, "text-container")}>
              <AnimatedText>
                That is why we are calling on you all to now work with us to unlock a fairer, data-sovereign, and decentralized AI future. I know that
                NEAR’s tens of millions of users provide an immense ecosystem of infrastructure and application builders who are already expanding
                what is possible using NEAR. 
              </AnimatedText>
            </div>
            <div className={cn(styles.description, "text-container")}>
              <AnimatedText>
                You are the <LampIcon /> innovators, developers, and visionaries who will deliver a better, fairer alternative to centralized AGI
                models owned by corporations and governments - entities that prioritize power over equity, reducing users to mere products.
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
