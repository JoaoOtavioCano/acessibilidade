"use client"

import React, { useState } from "react";

/**
 * Deve ser posicionado dentro de um container com position: (absolute|fixed|relative)
 */
const Navbar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button className="h-10 w-10 p-0 border-cinza border-2 bg-white hover:bg-claro transition absolute top-[50%] translate-y-[-50%] z-10 right-4 sm:hidden" onClick={() => setIsOpen(!isOpen)}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none"
					viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
					className={`size-6 ${isOpen ? "hidden" : "inline-block"}`}>
					<path strokeLinecap="round" strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none"
					viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
					className={`size-6 ${isOpen ? "inline-block" : "hidden"}`}>
					<path strokeLinecap="round" strokeLinejoin="round"
						d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
			<nav className={`absolute flex items-center h-screen top-0 bottom-0
				shadow-lg shadow-zinc-400 p-4 transition-all bg-white sm:static
				sm:flex sm:shadow-none sm:h-auto ${isOpen ? "right-0" : "right-[-100%]"}`}>
				<ul className="flex flex-col items-center gap-4 sm:flex-row">
					{React.Children.map(children, child => (
						<li onClick={() => setIsOpen(false)}>
							{child}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
