import Head from 'next/head';
import { standings } from '../lib/ErgastAPI';

import Main from '@layout/Main';
import Footer from '@layout/Footer';
import React from 'react';
import NavBar from '@components/NavBar';
import DriverPositionCard from '@components/DriverPositionCard';
import DriverListItem from '@components/DriverListItem';
import Standing from '@models/Standing';
import { colors } from '@data/constructors';

interface StandingsProps {
	standings: Standing[];
}

const Standings = ({ standings }: StandingsProps) => {
	return (
		<div>
			<Head>
				<title>Formula 1 Today</title>
				<meta name="description" content="Formula 1 Standings current year" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main>
				<NavBar />
				<div className="m-auto mt-12 flex flex-col items-center sm:items-start gap-6">
					{standings.map((driver) => {
						if (![1, 2, 3].includes(Number(driver.position))) return null;
						return (
							<div
								key={Number(driver.position)}
								className={`${
									Number(driver.position) === 2
										? 'xl:-ml-60'
										: Number(driver.position) === 3
										? 'xl:ml-auto xl:-mr-60 xl:-mt-12'
										: ''
								}`}
							>
								<DriverPositionCard
									name={driver.Driver.givenName}
									surname={driver.Driver.familyName}
									position={Number(driver.position)}
									driverNumber={Number(driver.Driver.permanentNumber)}
									driverNumberColor={colors[driver.Constructors[0].constructorId]}
									team="mercedes"
									color={colors[driver.Constructors[0].constructorId]}
									points={Number(driver.points)}
								/>
							</div>
						);
					})}
				</div>

				<div className="flex m-auto mt-12">
					<div className="flex flex-col">
						{standings.map((driver) => {
							if ([1, 2, 3].includes(Number(driver.position))) return null;
							return (
								<DriverListItem
									key={Number(driver.position)}
									name={driver.Driver.givenName}
									surname={driver.Driver.familyName}
									position={Number(driver.position)}
									driverNumber={Number(driver.Driver.permanentNumber)}
									driverNumberColor={colors[driver.Constructors[0].constructorId]}
									color={colors[driver.Constructors[0].constructorId]}
									points={Number(driver.points)}
								/>
							);
						})}
					</div>
				</div>
			</Main>
			<Footer></Footer>
		</div>
	);
};

Standings.getInitialProps = async () => {
	const res = await standings();

	return { standings: res };
};

export default Standings;
