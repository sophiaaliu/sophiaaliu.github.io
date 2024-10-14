import styles from "./index.module.css";
import cls from "classnames";
import { useWindowSize } from "../../lib/hooks";
import { useEffect, useRef, useState } from "react";
import { Easing, Tween } from "@tweenjs/tween.js";

export const NavigationBar = () => {
  const { width } = useWindowSize();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const isNavBarExpanded = useRef<boolean>(true);
  const prevWindowScrollY = useRef<number>(0);
  const navBar = useRef<HTMLDivElement>(null);
  const clipPathValRef = useRef<number>(0);
  const expandAnimationId = useRef<number>(-1);

  const expandNavBar = () => {
    if (expandAnimationId.current !== -1)
      window.cancelAnimationFrame(expandAnimationId.current);
    const tween = new Tween({ clipPathVal: clipPathValRef.current })
      .to({ clipPathVal: 0 }, 500)
      .easing(Easing.Sinusoidal.In)
      .onUpdate(({ clipPathVal }) => {
        if (navBar.current) {
          clipPathValRef.current = clipPathVal;
          navBar.current.style.clipPath = `inset(0 0 ${clipPathVal}% 0)`;
        }
      })
      .onComplete(() => {
        if (navBar.current) {
          clipPathValRef.current = 0;
          navBar.current.style.clipPath = "none";
        }
      })
      .start();

    const animate = () => {
      expandAnimationId.current = window.requestAnimationFrame(animate);
      const isAnimationRunning = tween.update();
      if (!isAnimationRunning)
        window.cancelAnimationFrame(expandAnimationId.current);
    };

    animate();
    isNavBarExpanded.current = true;
  };

  const collapseNavBar = () => {
    if (expandAnimationId.current !== -1)
      window.cancelAnimationFrame(expandAnimationId.current);
    const tween = new Tween({ clipPathVal: clipPathValRef.current })
      .to({ clipPathVal: 100 }, 500)
      .easing(Easing.Sinusoidal.In)
      .onUpdate(({ clipPathVal }) => {
        if (navBar.current) {
          clipPathValRef.current = clipPathVal;
          navBar.current.style.clipPath = `inset(0 0 ${clipPathVal}% 0)`;
        }
      })
      .start();

    const animate = () => {
      expandAnimationId.current = window.requestAnimationFrame(animate);
      const isAnimationRunning = tween.update();
      if (!isAnimationRunning)
        window.cancelAnimationFrame(expandAnimationId.current);
    };

    animate();
    isNavBarExpanded.current = false;
  };

  const scrollToCaseStudies = () => {
    const caseStudiesDiv = document.getElementById("case-studies");
    if (!caseStudiesDiv) return;

    caseStudiesDiv.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (width >= 650) setIsMenuOpened(false);
  }, [width]);

  useEffect(() => {
    const windowOnScroll = () => {
      // scrolling down
      if (window.scrollY >= prevWindowScrollY.current) {
        if (isNavBarExpanded.current) {
          setIsMenuOpened(false);
          collapseNavBar();
        }
      }
      // scrolling up
      else {
        if (!isNavBarExpanded.current) {
          expandNavBar();
        }
      }

      prevWindowScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", windowOnScroll);

    return () => {
      window.removeEventListener("scroll", windowOnScroll);
    };
  });

  return (
    <>
      <div
        className={cls(styles.navBar, {
          [styles.smallPadding]: width < 1000,
        })}
        ref={navBar}
      >
        <img src="./images/logo.png" className={styles.logo} />
        {width >= 650 && (
          <>
            <a
              className={cls(styles.link, {
                [styles.smallMarginRightLink]: width < 1000,
              })}
              onClick={() => scrollToCaseStudies()}
            >
              <span>WORK</span>
            </a>
            <a
              className={cls(styles.link, {
                [styles.smallMarginRightLink]: width < 1000,
              })}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1R7hDOouuHvIUphKNlzFBxL5tgAX0H25D/view?usp=sharing",
                );
                setIsMenuOpened(false);
              }}
            >
              <span>RESUME</span>
            </a>
          </>
        )}
        {width < 650 && (
          <img
            src="./svgs/menu.svg"
            className={styles.menu}
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          />
        )}
        {isMenuOpened && (
          <div className={styles.links}>
            <a
              className={cls(styles.link, {
                [styles.smallMarginRightLink]: width < 1000,
              })}
              onClick={() => {
                scrollToCaseStudies();
                setIsMenuOpened(false);
              }}
            >
              WORK
            </a>
            <a
              className={cls(styles.link, {
                [styles.smallMarginRightLink]: width < 1000,
              })}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1R7hDOouuHvIUphKNlzFBxL5tgAX0H25D/view?usp=sharing",
                );
                setIsMenuOpened(false);
              }}
            >
              RESUME
            </a>
          </div>
        )}
      </div>
    </>
  );
};
