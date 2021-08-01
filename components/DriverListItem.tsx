import React from 'react';

interface DriverListItemProps {
	position: number;
	name: string;
	surname: string;
	driverNumber: number;
	driverNumberColor: string;
	points: number;
	color: string;
}

const DriverListItem = ({
	position,
	name,
	surname,
	driverNumber,
	driverNumberColor,
	points,
	color,
}: DriverListItemProps) => {
	return (
		<div className="p-1.5 flex bg-black text-xl items-center">
			<div className="bg-white text-black w-8 h-8	 grid items-center justify-center text-lg font-bold rounded-br-md">
				{position}
			</div>
			<div className="w-1.5 my-1 mx-2 h-5/6" style={{ backgroundColor: color }}></div>
			<div>
				{name} <b className="uppercase">{surname}</b>
			</div>
			<div
				className="text-xl ml-2 mr-4"
				style={{
					textShadow: `0 0 8px ${driverNumberColor}, 0 0 7px ${driverNumberColor}`,
				}}
			>
				{driverNumber}
			</div>
			<div className="mr-0 m-auto pr-2">{points} pts</div>
		</div>
	);
};

export default DriverListItem;
