import Head from 'next/head';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

import Main from '@layout/Main';
import Footer from '@layout/Footer';
import React from 'react';
import NavBar from '@components/NavBar';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Formula 1 Today</title>
				<meta name="description" content="Formula 1 information page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main>
				<NavBar />
				{/* <div className="welcome-text-wrapper">
						<div className="title">Welcome!</div>
						<div className="text">
							I see you <AiOutlineHeart /> like Formula 1
						</div>
						<div className="text">and you are looking for some information</div>
						<div className="text arrow-left">
							<AiOutlineArrowLeft />
							go ahead and use this menu to navigate
						</div>
					</div>
					<div className="right-image"><img src="/assets/calendar.jpg" alt="" /></div> */}
			</Main>
			<Footer></Footer>
		</div>
	);
};

export default Home;
