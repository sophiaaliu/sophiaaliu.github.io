import cls from "classnames";
import styles from "./index.module.css";
import { useWindowSize } from "../../lib/hooks";
import { Easing, Tween } from "@tweenjs/tween.js";
import { useRef } from "react";

type FontColor = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export const OtherWorkLayout1 = () => {
  const { width } = useWindowSize();
  const image1Ref = useRef<HTMLImageElement>(null);
  const boxShadowColo1Ref = useRef<number>(0.1);
  const imageWidth1Ref = useRef<number>(100);
  const fontColor1Ref = useRef<FontColor>({ r: 0, g: 0, b: 0, a: 1 });
  const description1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const boxShadowColo2Ref = useRef<number>(0.1);
  const imageWidth2Ref = useRef<number>(100);
  const fontColor2Ref = useRef<FontColor>({ r: 0, g: 0, b: 0, a: 1 });
  const description2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLImageElement>(null);
  const boxShadowColo3Ref = useRef<number>(0.1);
  const imageWidth3Ref = useRef<number>(100);
  const fontColor3Ref = useRef<FontColor>({ r: 0, g: 0, b: 0, a: 1 });
  const description3Ref = useRef<HTMLDivElement>(null);
  const image4Ref = useRef<HTMLImageElement>(null);
  const boxShadowColo4Ref = useRef<number>(0.1);
  const imageWidth4Ref = useRef<number>(100);
  const fontColor4Ref = useRef<FontColor>({ r: 0, g: 0, b: 0, a: 1 });
  const description4Ref = useRef<HTMLDivElement>(null);

  const getBreakPoint = () => {
    if (width > 900) return styles.breakpoint1;
    else if (width > 724) return styles.breakpoint2;
    else return styles.breakpoint3;
  };

  const highlightWork = (
    imageRef: any,
    boxShadowColorRef: any,
    imageWidthRef: any,
    descriptionRef: any,
    fontColorRef: any,
    targetFontColor: FontColor,
  ) => {
    if (!imageRef) return;
    let animationId = -1;
    const tween = new Tween({
      color: boxShadowColorRef.current,
      width: imageWidthRef.current,
      r: fontColorRef.current.r,
      g: fontColorRef.current.g,
      b: fontColorRef.current.b,
      a: fontColorRef.current.a,
    })
      .to(
        {
          color: 0.2,
          width: 104,
          r: targetFontColor.r,
          g: targetFontColor.g,
          b: targetFontColor.b,
          a: targetFontColor.a,
        },
        100,
      )
      .easing(Easing.Quadratic.In)
      .onUpdate(({ color, width, r, g, b, a }) => {
        if (imageRef.current) {
          imageRef.current.style.boxShadow = `1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ${color})`;
          imageRef.current.style.width = `${width}%`;
          descriptionRef.current.style.color = `rgba(${r}, ${g}, ${b}, ${a})`;

          boxShadowColorRef.current = color;
          imageWidthRef.current = width;
          fontColorRef.current = { r, g, b, a };
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
    descriptionRef: any,
    fontColorRef: any,
  ) => {
    if (!imageRef) return;
    let animationId = -1;
    const tween = new Tween({
      color: boxShadowColorRef.current,
      width: imageWidthRef.current,
      r: fontColorRef.current.r,
      g: fontColorRef.current.g,
      b: fontColorRef.current.b,
      a: fontColorRef.current.a,
    })
      .to({ color: 0.1, width: 100, r: 0, g: 0, b: 0, a: 1 }, 100)
      .easing(Easing.Quadratic.In)
      .onUpdate(({ color, width, r, g, b, a }) => {
        if (imageRef.current) {
          imageRef.current.style.boxShadow = `1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ${color})`;
          imageRef.current.style.width = `${width}%`;
          descriptionRef.current.style.color = `rgba(${r}, ${g}, ${b}, ${a})`;

          boxShadowColorRef.current = color;
          imageWidthRef.current = width;
          fontColorRef.current = { r, g, b, a };
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

  return (
    <>
      <div className={cls(styles.sectionTitle, getBreakPoint())}>
        Other work
      </div>
      <div className={cls(styles.works, getBreakPoint())}>
        <div className={cls(styles.work, getBreakPoint())}>
          <a
            className={styles.imageWrapper}
            href="https://ixd.prattsi.org/2024/09/redesigning-zooms-invitation-flow/"
          >
            <img
              src="./images/zoom_redesign.png"
              className={styles.image}
              ref={image1Ref}
              onMouseEnter={() =>
                highlightWork(
                  image1Ref,
                  boxShadowColo1Ref,
                  imageWidth1Ref,
                  description1Ref,
                  fontColor1Ref,
                  { r: 19, g: 102, b: 255, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetWork(
                  image1Ref,
                  boxShadowColo1Ref,
                  imageWidth1Ref,
                  description1Ref,
                  fontColor1Ref,
                )
              }
            />
          </a>
          <div className={cls(styles.title)}>
            <span>Design Critique / Usability Evaluation / App Redesign</span>
          </div>
          <div className={cls(styles.description)} ref={description1Ref}>
            <a
              href="https://ixd.prattsi.org/2024/09/redesigning-zooms-invitation-flow/"
              onMouseEnter={() =>
                highlightWork(
                  image1Ref,
                  boxShadowColo1Ref,
                  imageWidth1Ref,
                  description1Ref,
                  fontColor1Ref,
                  { r: 19, g: 102, b: 255, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetWork(
                  image1Ref,
                  boxShadowColo1Ref,
                  imageWidth1Ref,
                  description1Ref,
                  fontColor1Ref,
                )
              }
            >
              Redesigning Zoom’s Invitation flow to improve usability and
              success rate
            </a>
          </div>
        </div>
        <div className={cls(styles.work, getBreakPoint())}>
          <a
            className={styles.imageWrapper}
            href="https://www.figma.com/deck/8qZnYJvXw3LAnzPvQdnnYI/Redesigning-Film-Forum's-Conversion-Funnel?node-id=1-660&node-type=canvas&viewport=25%2C340%2C0.04&t=4ey1CQk18oNL83RS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
          >
            <img
              src="./images/film_forum.png"
              className={styles.image}
              ref={image2Ref}
              onMouseEnter={() =>
                highlightWork(
                  image2Ref,
                  boxShadowColo2Ref,
                  imageWidth2Ref,
                  description2Ref,
                  fontColor2Ref,
                  { r: 19, g: 102, b: 255, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetWork(
                  image2Ref,
                  boxShadowColo2Ref,
                  imageWidth2Ref,
                  description2Ref,
                  fontColor2Ref,
                )
              }
            />
          </a>
          <div className={cls(styles.title)}>
            <span>
              Research Method Design / Heuristic Evaluation / App Redesign
            </span>
          </div>
          <div className={cls(styles.description)} ref={description2Ref}>
            <a
              href="https://www.figma.com/deck/8qZnYJvXw3LAnzPvQdnnYI/Redesigning-Film-Forum's-Conversion-Funnel?node-id=1-660&node-type=canvas&viewport=25%2C340%2C0.04&t=4ey1CQk18oNL83RS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
              onMouseEnter={() =>
                highlightWork(
                  image2Ref,
                  boxShadowColo2Ref,
                  imageWidth2Ref,
                  description2Ref,
                  fontColor2Ref,
                  { r: 19, g: 102, b: 255, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetWork(
                  image2Ref,
                  boxShadowColo2Ref,
                  imageWidth2Ref,
                  description2Ref,
                  fontColor2Ref,
                )
              }
            >
              Redesigning Film Forum’s conversion funnel to increase ticket
              sales
            </a>
          </div>
        </div>
      </div>
      <div className={cls(styles.works, getBreakPoint())}>
        <div className={cls(styles.work, getBreakPoint())}>
          <a
            className={styles.imageWrapper}
            href="https://sophialiu1.notion.site/Designing-a-digital-workspace-for-reading-creative-idiosyncratic-books-0fe53e50f2ea48bcb5f9e8f43ff858a1?pvs=4"
          >
            <img
              src="./images/dictee.png"
              className={styles.image}
              ref={image3Ref}
              onMouseEnter={() =>
                highlightWork(
                  image3Ref,
                  boxShadowColo3Ref,
                  imageWidth3Ref,
                  description3Ref,
                  fontColor3Ref,
                  { r: 19, g: 102, b: 255, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetWork(
                  image3Ref,
                  boxShadowColo3Ref,
                  imageWidth3Ref,
                  description3Ref,
                  fontColor3Ref,
                )
              }
            />
          </a>
          <div className={cls(styles.title)}>
            <span>Speculative Design / UI Design</span>
          </div>
          <div className={cls(styles.description)} ref={description3Ref}>
            <a
              href="https://sophialiu1.notion.site/Designing-a-digital-workspace-for-reading-creative-idiosyncratic-books-0fe53e50f2ea48bcb5f9e8f43ff858a1?pvs=4"
              onMouseEnter={() =>
                highlightWork(
                  image3Ref,
                  boxShadowColo3Ref,
                  imageWidth3Ref,
                  description3Ref,
                  fontColor3Ref,
                  { r: 19, g: 102, b: 255, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetWork(
                  image3Ref,
                  boxShadowColo3Ref,
                  imageWidth3Ref,
                  description3Ref,
                  fontColor3Ref,
                )
              }
            >
              Dictee: a digital workspace for material texts
            </a>
          </div>
        </div>
        <div className={cls(styles.work, getBreakPoint())}>
          <a
            className={styles.imageWrapper}
            href="https://sophialiu1.notion.site/Two-Projects-using-ArcGIS-5e7f5a61558c472f84ab1f87a0c4b390?pvs=4"
          >
            <img
              src="./images/gis.png"
              className={styles.image}
              ref={image4Ref}
              onMouseEnter={() =>
                highlightWork(
                  image4Ref,
                  boxShadowColo4Ref,
                  imageWidth4Ref,
                  description4Ref,
                  fontColor4Ref,
                  { r: 19, g: 102, b: 255, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetWork(
                  image4Ref,
                  boxShadowColo4Ref,
                  imageWidth4Ref,
                  description4Ref,
                  fontColor4Ref,
                )
              }
            />
          </a>
          <div className={cls(styles.title)}>
            <span>Data Visualization / Data Analysis / Mapping</span>
          </div>
          <div className={cls(styles.description)} ref={description4Ref}>
            <a
              href="https://sophialiu1.notion.site/Two-Projects-using-ArcGIS-5e7f5a61558c472f84ab1f87a0c4b390?pvs=4"
              onMouseEnter={() =>
                highlightWork(
                  image4Ref,
                  boxShadowColo4Ref,
                  imageWidth4Ref,
                  description4Ref,
                  fontColor4Ref,
                  { r: 19, g: 102, b: 255, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetWork(
                  image4Ref,
                  boxShadowColo4Ref,
                  imageWidth4Ref,
                  description4Ref,
                  fontColor4Ref,
                )
              }
            >
              Two studies mapping spatial data with ArcGIS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
