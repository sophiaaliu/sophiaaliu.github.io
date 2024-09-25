import { Link } from 'react-router-dom';
import styles from './index.module.css';
import cls from 'classnames';
import { useWindowSize } from '../../lib/hooks';
import { useEffect, useRef, useState } from 'react';
import { Easing, Tween } from '@tweenjs/tween.js';

export const NavigationBar = (props: { scrollToWorkSection: () => void }) => {
	const { scrollToWorkSection } = props;

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
					navBar.current.style.clipPath = 'none';
				}
			})
			.start();

		const animate = () => {
			expandAnimationId.current = window.requestAnimationFrame(animate);
			const isAnimationRunning = tween.update();
			if (!isAnimationRunning) window.cancelAnimationFrame(expandAnimationId.current);
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
			if (!isAnimationRunning) window.cancelAnimationFrame(expandAnimationId.current);
		};

		animate();
		isNavBarExpanded.current = false;
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

		window.addEventListener('scroll', windowOnScroll);

		return () => {
			window.removeEventListener('scroll', windowOnScroll);
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
				<span className={styles.name}>SOPHIA LIU</span>
				{width >= 650 && (
					<>
						<Link
							className={cls(styles.link, {
								[styles.smallMarginRightLink]: width < 1000,
							})}
							to="/"
							onClick={() => scrollToWorkSection()}
						>
							<span>WORK</span>
						</Link>
						<Link
							className={cls(styles.link, {
								[styles.smallMarginRightLink]: width < 1000,
							})}
							to="/"
						>
							<span>RESUME</span>
						</Link>
						<Link
							className={cls(styles.link, {
								[styles.smallMarginRightLink]: width < 1000,
							})}
							to="/"
						>
							<span>ABOUT</span>
						</Link>
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
						<Link
							className={cls(styles.link, {
								[styles.smallMarginRightLink]: width < 1000,
							})}
							to="/"
							onClick={() => scrollToWorkSection()}
						>
							WORK
						</Link>
						<Link
							className={cls(styles.link, {
								[styles.smallMarginRightLink]: width < 1000,
							})}
							to="/"
						>
							RESUME
						</Link>
						<Link
							className={cls(styles.link, {
								[styles.smallMarginRightLink]: width < 1000,
							})}
							to="/"
						>
							ABOUT
						</Link>
					</div>
				)}
			</div>
		</>
	);
};
