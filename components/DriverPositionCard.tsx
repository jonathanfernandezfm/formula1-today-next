import React from 'react';

interface DriverPositionCardProps {
	position: number;
	name: string;
	surname: string;
	driverNumber: number;
	driverNumberColor: string;
	team: string;
	points: number;
	color: string;
}

const DriverPositionCard = ({
	position,
	name,
	surname,
	driverNumber,
	driverNumberColor,
	team,
	points,
	color,
}: DriverPositionCardProps) => {
	return (
		<div className="flex">
			<div className="bg-black flex items-center p-1.5 rounded-br-xl">
				<div className="bg-white text-black w-14 h-14 grid items-center justify-center text-3xl font-bold rounded-br-xl">
					{position}
				</div>
				<div className="w-2 my-1 mx-2 h-5/6" style={{ backgroundColor: color }}></div>
				<div>
					<div className="flex gap-3">
						<div className="text-xl">
							{name} <b className="uppercase">{surname}</b>
						</div>
						<div
							className="text-xl"
							style={{
								textShadow: `0 0 8px ${driverNumberColor}, 0 0 7px ${driverNumberColor}`,
							}}
						>
							{driverNumber}
						</div>
					</div>
					<div className="text-lg">{team}</div>
				</div>
				<div className="sm:pl-12 pl-6 pr-6 text-lg">{points} pts</div>
			</div>
		</div>
	);
};
export default DriverPositionCard;
