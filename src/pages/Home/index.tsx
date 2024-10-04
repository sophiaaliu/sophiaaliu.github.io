import cls from "classnames";
import styles from "./index.module.css";
import { BrowseWorkPrompt } from "../../components/BrowseWorkPrompt";
import { Work } from "../../components/Work";
import { useWindowSize } from "../../lib/hooks";
import { Layout1 } from "./Layout1";
import { Layout2 } from "./Layout2";
import { useEffect, useRef } from "react";
import { Easing, Tween } from "@tweenjs/tween.js";
import {
  LANDING_PAGE_ABOUT_1,
  LANDING_PAGE_ABOUT_2,
  LANDING_PAGE_ABOUT_3,
} from "../../lib/constants";
import { useLocation } from "react-router";

export const Home = (props: {
  setWorkSectionTop: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { setWorkSectionTop } = props;

  const { width } = useWindowSize();
  const landingPageRef = useRef<HTMLDivElement>(null);
  const workPageRef = useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/work") {
      if (workPageRef.current) {
        window.scrollTo(
          0,
          workPageRef.current.getBoundingClientRect().top ?? 0,
        );
      }
    }
  }, [pathname]);

  useEffect(() => {
    const onWindowResize = () => {
      if (workPageRef.current) {
        setWorkSectionTop(workPageRef.current.getBoundingClientRect().top ?? 0);
      }
    };
    window.addEventListener("resize", onWindowResize);
    onWindowResize();
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  const getLayout = () => {
    if (width >= 800) return <Layout1 />;
    return <Layout2 />;
  };

  const getAboutFootSize = () => {
    if (width >= 1000) return "20px";
    else return "16px";
  };

  const getLinkFontSize = () => {
    if (width >= 1000) return "20px";
    else return "16px";
  };

  const onBrowseWork = () => {
    if (!landingPageRef.current) return;
    let animationId = -1;
    const tween = new Tween({ scrollTop: window.scrollY })
      .to(
        { scrollTop: landingPageRef.current?.getBoundingClientRect().height },
        500,
      )
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
    <div className={styles.home}>
      <div className={styles.backgroundImage} />
      <div
        ref={landingPageRef}
        className={cls(
          styles.landingPage,
          width >= 800 ? styles.defaultPaddingTop : styles.smallPaddingTop,
        )}
      >
        {getLayout()}
        <div
          className={cls(styles.about, {
            [styles.small]: width < 1000,
          })}
        >
          <div>{LANDING_PAGE_ABOUT_1}</div>
          <div>{LANDING_PAGE_ABOUT_2}</div>
          <div>{LANDING_PAGE_ABOUT_3}</div>
        </div>
        <div className={styles.links}>
          <div
            className={styles.link}
            style={{
              fontSize: getLinkFontSize(),
            }}
            onClick={() => window.open("mailto:sliu56@pratt.edu")}
          >
            Email
          </div>
          <div
            className={styles.link}
            style={{
              fontSize: getLinkFontSize(),
            }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/sophia-liu-designs/")
            }
          >
            Linkedin
          </div>
        </div>
        {false && (
          <div className={styles.browseProjectsPrompt}>
            <BrowseWorkPrompt onClick={onBrowseWork} />
          </div>
        )}
      </div>
      <div
        className={cls(
          styles.workPage,
          width >= 800 ? styles.defaultMarginTop : styles.smallMarginTop,
        )}
        ref={workPageRef}
      >
        <Work
          imageSrc="./images/tempo.png"
          imageHref="https://sophiaa-liu.webflow.io/tempo-ai"
          title="Tempo Labs (YC S23)"
          summary="Start-up / 10 weeks / Internship / 2024"
          description="AI-powered IDE that streamlines flow from idea to MVP for start-up founders"
          className={cls(styles.work, {
            [styles.smallMarginBottom]: width < 1200,
          })}
        />
        <Work
          imageSrc="./images/develop_for_good.png"
          imageHref="https://sophiaa-liu.webflow.io/develop-for-good"
          title="Horizon: a mentoring app"
          summary="Volunteer / 16 weeks / Develop for Good / 2024"
          description="Designing for 1-1 relationship growth for the foster care community"
          className={cls(styles.work, {
            [styles.smallMarginBottom]: width < 1200,
          })}
        />
        <Work
          imageSrc="./images/wayfarer.png"
          imageHref="https://sophiaa-liu.webflow.io/wayfarer"
          title="Wayfarer AI"
          summary="passion project / 12 weeks / 2024"
          description="Designing an AI co-pilot for flexibility and trip-planning on-the-go"
          className={cls(styles.work, {
            [styles.smallMarginBottom]: width < 1200,
          })}
        />
        {/*<div className={styles.footnote} style={{ fontSize: getFootnoteFontSize() }}>
					<span className={styles.footnoteText}>Contact Me</span>
				</div>
				<div className={styles.footnote} style={{ fontSize: getFootnoteFontSize() }}>
					<span className={styles.footnoteText}>Learn More About Me</span>
				</div>
				<div className={styles.footnote} style={{ fontSize: getFootnoteFontSize() }}>
					<span className={styles.footnoteText}>My Resume</span>
				</div>*/}
      </div>
      <div className={styles.footer}>
        <div className={styles.footer1}>Designed and coded by Sophia Liu.</div>
        <div className={styles.footer2} onClick={onBackToTopClick}>
          Back to top
        </div>
      </div>
    </div>
  );
};
