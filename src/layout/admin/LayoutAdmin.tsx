import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function LayoutAdmin({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<div className='flex h-screen'>
				<Sidebar />
				<main className='pt-24'>{children}</main>
			</div>
		</>
	);
}
