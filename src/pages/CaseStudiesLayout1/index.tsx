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

export const CaseStudiesLayout1 = () => {
  const { width } = useWindowSize();
  const image1Ref = useRef<HTMLImageElement>(null);
  const boxShadowOpacity1Ref = useRef<number>(0.1);
  const imageWidth1Ref = useRef<number>(100);
  const fontColor1Ref = useRef<FontColor>({ r: 0, g: 0, b: 0, a: 1 });
  const description1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const boxShadowOpacity2Ref = useRef<number>(0.1);
  const imageWidth2Ref = useRef<number>(100);
  const fontColor2Ref = useRef<FontColor>({ r: 0, g: 0, b: 0, a: 1 });
  const description2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLImageElement>(null);
  const boxShadowOpacity3Ref = useRef<number>(0.1);
  const imageWidth3Ref = useRef<number>(100);
  const fontColor3Ref = useRef<FontColor>({ r: 0, g: 0, b: 0, a: 1 });
  const description3Ref = useRef<HTMLDivElement>(null);

  const getBreakPoint = () => {
    if (width > 900) return styles.breakpoint1;
    else if (width > 724) return styles.breakpoint2;
    else return styles.breakpoint3;
  };

  const getCaseStudyOrder = (info: any, image: any) => {
    if (width > 724)
      return (
        <>
          {info}
          {image}
        </>
      );
    else
      return (
        <>
          {image}
          {info}
        </>
      );
  };

  const highlightCaseStudy = (
    imageRef: any,
    boxShadowOpacityRef: any,
    imageWidthRef: any,
    descriptionRef: any,
    fontColorRef: any,
    targetFontColor: FontColor,
  ) => {
    if (!imageRef) return;
    let animationId = -1;
    const tween = new Tween({
      boxShadowOpacity: boxShadowOpacityRef.current,
      width: imageWidthRef.current,
      r: fontColorRef.current.r,
      g: fontColorRef.current.g,
      b: fontColorRef.current.b,
      a: fontColorRef.current.a,
    })
      .to(
        {
          boxShadowOpacity: 0.2,
          width: 104,
          r: targetFontColor.r,
          g: targetFontColor.g,
          b: targetFontColor.b,
          a: targetFontColor.a,
        },
        100,
      )
      .easing(Easing.Quadratic.In)
      .onUpdate(({ boxShadowOpacity, width, r, g, b, a }) => {
        if (imageRef.current) {
          imageRef.current.style.boxShadow = `1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ${boxShadowOpacity})`;
          imageRef.current.style.width = `${width}%`;
          descriptionRef.current.style.color = `rgba(${r}, ${g}, ${b}, ${a})`;

          boxShadowOpacityRef.current = boxShadowOpacity;
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

  const resetCaseStudy = (
    imageRef: any,
    boxShadowOpacityRef: any,
    imageWidthRef: any,
    descriptionRef: any,
    fontColorRef: any,
  ) => {
    if (!imageRef) return;
    let animationId = -1;
    const tween = new Tween({
      boxShadowOpacity: boxShadowOpacityRef.current,
      width: imageWidthRef.current,
      r: fontColorRef.current.r,
      g: fontColorRef.current.g,
      b: fontColorRef.current.b,
      a: fontColorRef.current.a,
    })
      .to({ boxShadowOpacity: 0.1, width: 100, r: 0, g: 0, b: 0, a: 1 }, 100)
      .easing(Easing.Quadratic.In)
      .onUpdate(({ boxShadowOpacity, width, r, g, b, a }) => {
        if (imageRef.current) {
          imageRef.current.style.boxShadow = `1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ${boxShadowOpacity})`;
          imageRef.current.style.width = `${width}%`;
          descriptionRef.current.style.color = `rgba(${r}, ${g}, ${b}, ${a})`;

          boxShadowOpacityRef.current = boxShadowOpacity;
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
        Case Studies
      </div>
      <div className={cls(styles.caseStudy, getBreakPoint())}>
        {getCaseStudyOrder(
          <div className={cls(styles.info, getBreakPoint())}>
            <div className={cls(styles.caseTitle)}>
              <span>
                Start-up / AI co-pilot / Low-code platform / SaaS tool
              </span>
            </div>
            <div className={cls(styles.caseDescription)} ref={description1Ref}>
              <a
                href='https://sophiaa-liu.webflow.io/tempo-ai'
                onMouseEnter={() =>
                  highlightCaseStudy(
                    image1Ref,
                    boxShadowOpacity1Ref,
                    imageWidth1Ref,
                    description1Ref,
                    fontColor1Ref,
                    { r: 109, g: 25, b: 204, a: 1 },
                  )
                }
                onMouseLeave={() =>
                  resetCaseStudy(
                    image1Ref,
                    boxShadowOpacity1Ref,
                    imageWidth1Ref,
                    description1Ref,
                    fontColor1Ref,
                  )
                }
              >
                AI-aided product development dashboard that streamlines idea →
                MVP
              </a>
            </div>
            <div className={cls(styles.caseTimeline)}>
              <span>10-week Internship @ Tempo Labs (YC S23)</span>
            </div>
          </div>,
          <a className={cls(styles.imageWrapper, getBreakPoint())} href='https://sophiaa-liu.webflow.io/tempo-ai'>
            <img
              src="./images/tempo.png"
              className={cls(styles.image)}
              ref={image1Ref}
              onMouseEnter={() =>
                highlightCaseStudy(
                  image1Ref,
                  boxShadowOpacity1Ref,
                  imageWidth1Ref,
                  description1Ref,
                  fontColor1Ref,
                  { r: 109, g: 25, b: 204, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetCaseStudy(
                  image1Ref,
                  boxShadowOpacity1Ref,
                  imageWidth1Ref,
                  description1Ref,
                  fontColor1Ref,
                )
              }
            />
          </a>,
        )}
      </div>
      <div className={cls(styles.caseStudy, getBreakPoint())}>
        {getCaseStudyOrder(
          <div className={cls(styles.info, getBreakPoint())}>
            <div className={cls(styles.caseTitle)}>
              <span>EdTech / Mental health / Conversational UX / Mobile</span>
            </div>
            <div className={cls(styles.caseDescription)} ref={description2Ref}>
              <a
                href='https://sophiaa-liu.webflow.io/develop-for-good'
                onMouseEnter={() =>
                  highlightCaseStudy(
                    image2Ref,
                    boxShadowOpacity2Ref,
                    imageWidth2Ref,
                    description2Ref,
                    fontColor2Ref,
                    { r: 1, g: 90, b: 83, a: 1 },
                  )
                }
                onMouseLeave={() =>
                  resetCaseStudy(
                    image2Ref,
                    boxShadowOpacity2Ref,
                    imageWidth2Ref,
                    description2Ref,
                    fontColor2Ref,
                  )
                }
              >
                Horizon: a mentoring app that prioritizes engagement and
                flexibility
              </a>
            </div>
            <div className={cls(styles.caseTimeline)}>
              <span>16-week client project @ Develop for Good</span>
            </div>
          </div>,
          <a className={cls(styles.imageWrapper, getBreakPoint())} href='https://sophiaa-liu.webflow.io/develop-for-good'>
            <img
              src="./images/develop_for_good.png"
              className={cls(styles.image)}
              ref={image2Ref}
              onMouseEnter={() =>
                highlightCaseStudy(
                  image2Ref,
                  boxShadowOpacity2Ref,
                  imageWidth2Ref,
                  description2Ref,
                  fontColor2Ref,
                  { r: 1, g: 90, b: 83, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetCaseStudy(
                  image2Ref,
                  boxShadowOpacity2Ref,
                  imageWidth2Ref,
                  description2Ref,
                  fontColor2Ref,
                )
              }
            />
          </a>,
        )}
      </div>
      <div className={cls(styles.caseStudy, getBreakPoint())}>
        {getCaseStudyOrder(
          <div className={cls(styles.info, getBreakPoint())}>
            <div className={cls(styles.caseTitle)}>
              <span>AI tool / Mobile app design / Accessibility</span>
            </div>
            <div className={cls(styles.caseDescription)} ref={description3Ref}>
              <a
                href='https://sophiaa-liu.webflow.io/wayfarer'
                onMouseEnter={() =>
                  highlightCaseStudy(
                    image3Ref,
                    boxShadowOpacity3Ref,
                    imageWidth3Ref,
                    description3Ref,
                    fontColor3Ref,
                    { r: 176, g: 0, b: 173, a: 1 },
                  )
                }
                onMouseLeave={() =>
                  resetCaseStudy(
                    image3Ref,
                    boxShadowOpacity3Ref,
                    imageWidth3Ref,
                    description3Ref,
                    fontColor3Ref,
                  )
                }
              >
                AI trip-planning tool that combines search and plan for
                last-minute changes
              </a>
            </div>
            <div className={cls(styles.caseTimeline)}>
              <span>14-week independent project</span>
            </div>
          </div>,
          <a className={cls(styles.imageWrapper, getBreakPoint())} href='https://sophiaa-liu.webflow.io/wayfarer'>
            <img
              src="./images/wayfarer.png"
              className={cls(styles.image)}
              ref={image3Ref}
              onMouseEnter={() =>
                highlightCaseStudy(
                  image3Ref,
                  boxShadowOpacity3Ref,
                  imageWidth3Ref,
                  description3Ref,
                  fontColor3Ref,
                  { r: 176, g: 0, b: 173, a: 1 },
                )
              }
              onMouseLeave={() =>
                resetCaseStudy(
                  image3Ref,
                  boxShadowOpacity3Ref,
                  imageWidth3Ref,
                  description3Ref,
                  fontColor3Ref,
                )
              }
            />
          </a>,
        )}
      </div>
    </>
  );
};
