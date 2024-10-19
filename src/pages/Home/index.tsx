import cls from "classnames";
import styles from "./index.module.css";
import { useWindowSize } from "../../lib/hooks";
import { IntroLayout1 } from "../IntroLayout1";
import { IntroLayout2 } from "../IntroLayout2";
import { Easing, Tween } from "@tweenjs/tween.js";
import {
  LANDING_PAGE_ABOUT_1,
  LANDING_PAGE_ABOUT_2,
  LANDING_PAGE_ABOUT_3,
} from "../../lib/constants";
import { CaseStudiesLayout1 } from "../CaseStudiesLayout1";
import { OtherWorkLayout1 } from "../OtherWorkLayout1";
import { NavigationBar } from "../../components/NavigationBar";

export const Home = () => {
  const { width } = useWindowSize();

  const getIntroLayout = () => {
    if (width > 1260) return <IntroLayout1 />;
    return <IntroLayout2 />;
  };

  const getCaseStudiesLayout = () => {
    return <CaseStudiesLayout1 />;
  };

  const getOtherWorkLayout = () => {
    return <OtherWorkLayout1 />;
  };

  const onBackToTopClick = () => {
    let animationId = -1;
    const tween = new Tween({ scrollTop: window.scrollY })
      .to({ scrollTop: 0 }, 500)
      .easing(Easing.Quadratic.In)
      .onUpdate(({ scrollTop }) => {
        window?.scrollTo(0, scrollTop);
      })
      .start();

    const animate = () => {
      animationId = window.requestAnimationFrame(animate);
      const isAnimationRunning = tween.update();
      if (!isAnimationRunning) window.cancelAnimationFrame(animationId);
    };

    animate();
  };

  return (
    <div className={styles.homeWrapper}>
      <NavigationBar />
      <div className={styles.backgroundImage} />
      <div
        className={cls(styles.home, {
          [styles.breakpoint1]: width > 1260,
          [styles.breakpoint2]: width > 900 && width <= 1260,
          [styles.breakpoint3]: width <= 900,
        })}
      >
        <div
          className={cls(
            styles.intro,
            width >= 800 ? styles.defaultPaddingTop : styles.smallPaddingTop,
          )}
        >
          {getIntroLayout()}
          <div
            className={cls(styles.about, {
              [styles.breakpoint1]: width > 1260,
              [styles.breakpoint2]: width <= 1260,
            })}
          >
            <div>{LANDING_PAGE_ABOUT_1}</div>
            <div>{LANDING_PAGE_ABOUT_2}</div>
            <div>{LANDING_PAGE_ABOUT_3}</div>
          </div>
          <div className={styles.links}>
            <div
              className={styles.link}
              onClick={() => window.open("mailto:sliu56@pratt.edu")}
            >
              Email
            </div>
            <div
              className={styles.link}
              onClick={() =>
                window.open("https://www.linkedin.com/in/sophia-liu-designs/")
              }
            >
              Linkedin
            </div>
          </div>
        </div>
        <div
          className={cls(styles.caseStudies, {
            [styles.breakpoint1]: width > 800,
            [styles.breakpoint2]: width <= 800,
          })}
          id="case-studies"
        >
          <a></a>
          {getCaseStudiesLayout()}
        </div>
        <div
          className={cls(styles.otherWorkPage, {
            [styles.breakpoint1]: width > 800,
            [styles.breakpoint2]: width <= 800,
          })}
        >
          {getOtherWorkLayout()}
        </div>
        <div className={styles.footer}>
          <div className={styles.footer1}>
            Designed and coded by Sophia Liu.
          </div>
          <div className={styles.footer2} onClick={onBackToTopClick}>
            Back to top
          </div>
        </div>
      </div>
    </div>
  );
};
