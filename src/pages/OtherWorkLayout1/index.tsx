import cls from "classnames";
import styles from "./index.module.css";
import { useWindowSize } from "../../lib/hooks";
import { Easing, Tween } from "@tweenjs/tween.js";
import { useRef } from "react";

export const OtherWorkLayout1 = () => {
  const { width } = useWindowSize();
  const image1Ref = useRef<HTMLImageElement>(null);
  const boxShadowColo1Ref = useRef<number>(0.1);
  const imageWidth1Ref = useRef<number>(100);
  const image2Ref = useRef<HTMLImageElement>(null);
  const boxShadowColo2Ref = useRef<number>(0.1);
  const imageWidth2Ref = useRef<number>(100);

  const getBreakPoint = () => {
    if (width > 900) return styles.breakpoint1;
    else if (width > 724) return styles.breakpoint2;
    else return styles.breakpoint3;
  };

  const highlightWork = (
    imageRef: any,
    boxShadowColorRef: any,
    imageWidthRef: any,
  ) => {
    if (!imageRef) return;
    let animationId = -1;
    const tween = new Tween({
      color: boxShadowColorRef.current,
      width: imageWidthRef.current,
    })
      .to({ color: 0.2, width: 104 }, 100)
      .easing(Easing.Quadratic.In)
      .onUpdate(({ color, width }) => {
        if (imageRef.current) {
          imageRef.current.style.boxShadow = `1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ${color})`;
          imageRef.current.style.width = `${width}%`;

          boxShadowColorRef.current = color;
          imageWidthRef.current = width;
        }
      })
      .start();

    const animate = () => {
      animationId = window.requestAnimationFrame(animate);
      const isAnimationRunning = tween.update();
      if (!isAnimationRunning) window.cancelAnimationFrame(animationId);
    };

    animate();
  };

  const resetWork = (
    imageRef: any,
    boxShadowColorRef: any,
    imageWidthRef: any,
  ) => {
    if (!imageRef) return;
    let animationId = -1;
    const tween = new Tween({
      color: boxShadowColorRef.current,
      width: imageWidthRef.current,
    })
      .to({ color: 0.1, width: 100 }, 100)
      .easing(Easing.Quadratic.In)
      .onUpdate(({ color, width }) => {
        if (imageRef.current) {
          imageRef.current.style.boxShadow = `1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ${color})`;
          imageRef.current.style.width = `${width}%`;

          boxShadowColorRef.current = color;
          imageWidthRef.current = width;
        }
      })
      .start();

    const animate = () => {
      animationId = window.requestAnimationFrame(animate);
      const isAnimationRunning = tween.update();
      if (!isAnimationRunning) window.cancelAnimationFrame(animationId);
    };

    animate();
  };

  const toZoomRedesign = () =>
    window.open(
      "https://ixd.prattsi.org/2024/09/redesigning-zooms-invitation-flow/",
    );

  const toFilmForum = () =>
    window.open(
      "https://www.figma.com/deck/8qZnYJvXw3LAnzPvQdnnYI/Redesigning-Film-Forum's-Conversion-Funnel?node-id=1-660&node-type=canvas&viewport=25%2C340%2C0.04&t=4ey1CQk18oNL83RS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    );

  return (
    <>
      <div className={cls(styles.sectionTitle, getBreakPoint())}>
        Other work
      </div>
      <div className={cls(styles.works, getBreakPoint())}>
        <div className={cls(styles.work, getBreakPoint())}>
          <div className={styles.imageWrapper}>
            <img
              src="./images/zoom_redesign.png"
              className={styles.image}
              ref={image1Ref}
              onClick={toZoomRedesign}
              onMouseEnter={() =>
                highlightWork(image1Ref, boxShadowColo1Ref, imageWidth1Ref)
              }
              onMouseLeave={() =>
                resetWork(image1Ref, boxShadowColo1Ref, imageWidth1Ref)
              }
            />
          </div>
          <div className={cls(styles.title)}>
            <span>Design Critique / Usability Evaluation / App Redesign</span>
          </div>
          <div className={cls(styles.description)}>
            <span
              onClick={toZoomRedesign}
              onMouseEnter={() =>
                highlightWork(image1Ref, boxShadowColo1Ref, imageWidth1Ref)
              }
              onMouseLeave={() =>
                resetWork(image1Ref, boxShadowColo1Ref, imageWidth1Ref)
              }
            >
              Redesigning Zoom’s Invitation flow to improve usability and
              success rate
            </span>
          </div>
        </div>
        <div className={cls(styles.work, getBreakPoint())}>
          <div className={styles.imageWrapper}>
            <img
              src="./images/film_forum.png"
              className={styles.image}
              ref={image2Ref}
              onClick={toFilmForum}
              onMouseEnter={() =>
                highlightWork(image2Ref, boxShadowColo2Ref, imageWidth2Ref)
              }
              onMouseLeave={() =>
                resetWork(image2Ref, boxShadowColo2Ref, imageWidth2Ref)
              }
            />
          </div>
          <div className={cls(styles.title)}>
            <span>
              Research Method Design / Heuristic Evaluation / App Redesign
            </span>
          </div>
          <div className={cls(styles.description)}>
            <span
              onClick={toFilmForum}
              onMouseEnter={() =>
                highlightWork(image2Ref, boxShadowColo2Ref, imageWidth2Ref)
              }
              onMouseLeave={() =>
                resetWork(image2Ref, boxShadowColo2Ref, imageWidth2Ref)
              }
            >
              Redesigning Film Forum’s conversion funnel to increase ticket
              sales
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
