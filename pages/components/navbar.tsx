import { NextComponentType } from 'next';
import Link from 'next/link';
import { Component, CSSProperties } from 'react';
import styles from '../../styles/navbar.module.css';

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<li className={styles.link}>
				<Link href='/TimerScreen'>
					<b>TIMER</b>
				</Link>
			</li>
			<li className={styles.link}>
				<Link href='/SolvesScreen'>
					<b>SOLVES</b>
				</Link>
			</li>
			<li className={styles.link}>
				<Link href='/StatsScreen'>
					<b>STATS</b>
				</Link>
			</li>
			<li className={styles.link}>
				<Link href='/HelpScreen'>
					<b>HELP</b>
				</Link>
			</li>
		</div>
	);
};

export default NavBar;
