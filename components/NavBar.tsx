import React from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { AiOutlineCrown } from 'react-icons/ai';
import { AiOutlineSwap } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { AiOutlineContacts } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import ActiveLink from './ActiveLink';

interface MenuButton {
	icon: React.ReactNode;
	label: string;
	link: string;
}

const buttons = [
	{ icon: <AiOutlineHome />, label: 'Home', link: '/' },
	{ icon: <AiTwotoneCalendar />, label: 'Calendar', link: '/calendar' },
	{ icon: <AiOutlineCrown />, label: 'Standings', link: '/standings' },
	{ icon: <AiOutlineSwap />, label: 'Circuits', link: '/circuits' },
	{ icon: <AiOutlineUser />, label: 'Drivers', link: '/drivers' },
	{ icon: <AiOutlineContacts />, label: 'Teams', link: '/teams' },
	{ icon: <AiOutlineDoubleRight />, label: 'Races', link: '/races' },
];

const NavBar = () => {
	return (
		<div className="grid fixed top-0 w-full m-auto left-0 ">
			<div className="flex m-auto py-3 px-10 md:gap-10 bg-black border-t-4 border-red-600 gap-6">
				{buttons.map(({ icon, label, link }: MenuButton) => {
					return (
						<ActiveLink
							className={'flex justify-center items-center gap-1.5 text-xl hover:text-red-600'}
							key={label}
							href={link}
						>
							<a>
								<div className="button-icon">{icon}</div>
								<div className="button-label uppercase font-semibold hidden lg:block">{label}</div>
							</a>
						</ActiveLink>
					);
				})}
			</div>
		</div>
	);
};

export default NavBar;
