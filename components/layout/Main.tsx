import React from 'react';

interface MainProps {
	children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
	return <div className="container m-auto grid justify-center mb-24 mt-12">{children}</div>;
};

export default Main;
