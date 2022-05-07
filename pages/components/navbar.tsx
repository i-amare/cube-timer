import { NextComponentType } from 'next';
import Link from 'next/link';
import { Component, CSSProperties } from 'react';
import styles from '../../styles/navbar.module.css';

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.link}>
				<Link href='/TimerScreen'>
					<b>TIMER</b>
				</Link>
			</div>
			<div className={styles.link}>
				<Link href='/TrainerScreen'>
					<b>TRAINER</b>
				</Link>
			</div>
			<div className={styles.link}>
				<Link href='/StatsScreen'>
					<b>STATS</b>
				</Link>
			</div>
			<div className={styles.link}>
				<Link href='/HelpScreen'>
					<b>HELP</b>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
