import Constructor from '@models/Constructor';
import Driver from '@models/Driver';
import RaceData from '@models/Race';
import Race from '@models/Race';
import Standing from '@models/Standing';

export const standings = async (): Promise<Standing[]> => {
	const result: any = await fetch(`http://ergast.com/api/f1/current/driverStandings.json`, {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
		}),
	});

	const json = await result.json();

	return json.MRData.StandingsTable.StandingsLists[0].DriverStandings;
};

export const races = async (): Promise<Race[]> => {
	const result: any = await fetch(`http://ergast.com/api/f1/current.json`, {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
		}),
	});

	const json = await result.json();

	return json.MRData.RaceTable.Races;
};

export const driver = async (id?: string): Promise<Driver> => {
	const result: any = await fetch(`http://ergast.com/api/f1/drivers/${id}.json`, {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
		}),
	});

	const json = await result.json();

	return json.MRData.DriverTable.Drivers[0];
};

export const drivers = async (): Promise<Driver[]> => {
	const result: any = await fetch(`http://ergast.com/api/f1/current/drivers.json`, {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
		}),
	});

	const json = await result.json();

	return json.MRData.DriverTable.Drivers;
};

export const teams = async (driverId: string): Promise<Constructor[]> => {
	let url = driverId
		? `http://ergast.com/api/f1/drivers/${driverId}/constructors.json`
		: `http://ergast.com/api/f1/current/constructors.json`;
	const result: any = await fetch(url, {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
		}),
	});

	const json = await result.json();

	return json.MRData.ConstructorTable.Constructors;
};

export const lastRace = async (driverId: string): Promise<RaceData> => {
	const result: any = await fetch(`http://ergast.com/api/f1/current/last/drivers/${driverId}/results.json`, {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
		}),
	});

	const json = await result.json();

	return json.MRData.RaceTable.Races[0];
};
