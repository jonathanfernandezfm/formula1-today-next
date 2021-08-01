import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';

interface ActiveLinkProps {
	children: React.ReactElement<any>;
	className: string;
	href: string;
}

const ActiveLink = ({ children, href, className, ...props }: ActiveLinkProps) => {
	const { asPath } = useRouter();

	const classes = asPath === href ? `text-red-600 ${className}`.trim() : className;

	return (
		<Link {...props} href={href}>
			{React.cloneElement(children, {
				className: classes || null,
			})}
		</Link>
	);
};

export default ActiveLink;
