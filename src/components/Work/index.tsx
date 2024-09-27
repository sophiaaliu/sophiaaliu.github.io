import cls from "classnames";
import styles from "./index.module.css";
import { useWindowSize } from "../../lib/hooks";
import { Suspense, useRef } from "react";
import { Easing, Tween } from "@tweenjs/tween.js";

export type WorkProps = {
  title: string;
  description: string;
  summary: string;
  className?: string;
  imageSrc: string;
  imageHref: string;
};

export const Work = (props: WorkProps) => {
  const { imageSrc, imageHref, title, summary, description, className } = props;
  const { width } = useWindowSize();
  const imageRef = useRef<HTMLImageElement>(null);
  const boxShadowColorRef = useRef<number>(0.1);
  const imageWidthRef = useRef<number>(100);

  const onImageMouseEnter = () => {
    if (!imageRef) return;
    let animationId = -1;
    const tween = new Tween({
      color: boxShadowColorRef.current,
      width: imageWidthRef.current,
    })
      .to({ color: 0.2, width: 102 }, 100)
      .easing(Easing.Quadratic.In)
      .onUpdate(({ color, width }) => {
        if (imageRef.current) {
          imageRef.current.style.boxShadow = `1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ${color})`;
          imageRef.current.style.width = `${width}%`;
          imageRef.current.style.transform = `translateX(-${(width - 100) / 2}%)`;

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

  const onImageMouseLeave = () => {
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
          imageRef.current.style.transform = `translateX(-${(width - 100) / 2}%)`;

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

  return (
    <div className={cls(styles.work, className)}>
      <Suspense fallback={<div className={styles.background} />}>
        <img
          src={imageSrc}
          className={cls(styles.image)}
          onClick={() => {
            window.open(imageHref);
          }}
          ref={imageRef}
          onMouseEnter={onImageMouseEnter}
          onMouseLeave={onImageMouseLeave}
        />
      </Suspense>
      <div
        className={cls(styles.meta, {
          [styles.stack]: width < 600,
        })}
      >
        <div className={cls(styles.info)}>
          <div
            className={cls(styles.title, {
              [styles.smallFont]: width < 800,
            })}
          >
            {title}
          </div>
          <div
            className={cls(styles.summary, {
              [styles.smallFont]: width < 800,
            })}
          >
            {summary}
          </div>
        </div>
        <div
          className={cls(styles.description, {
            [styles.stack]: width < 600,
            [styles.smallFont]: width < 800,
          })}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
