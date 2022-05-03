import { NextComponentType } from 'next';
import { Component, CSSProperties } from 'react';
import styles from '../../styles/navbar.module.css';

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<li>
				<b>TIMER</b>
			</li>
			<li>
				<b>SOLVES</b>
			</li>
			<li>
				<b>STATS</b>
			</li>
			<li>
				<b>HELP</b>
			</li>
		</div>
	);
};

export default NavBar;
