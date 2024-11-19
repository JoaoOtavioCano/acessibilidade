"use client"
import HeaderLogo from '@/components/HeaderLogo';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from "next/image";
import AcessibilityModal from './AcessibilityModal';
import { useState } from 'react';


export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<header className="flex fixed top-0 left-0 right-0 items-center
		justify-between shadow-md shadow-zinc-400 py-[6px] pl-[12px]
		sm:pl-[45px] pr-5 bg-white z-30 dark:bg-black dark:shadow-black">
			<HeaderLogo />
			<Navbar>
				<AcessibilityModal open={open}/>
				<button onClick={() => {open ? setOpen(false) : setOpen(true)}}>
					<Image src="/botaoAcessibilidade.svg" alt="Educk logo" height={56} width={56}  />
				</button>
				<Link href="/">
					<button className={"py-2 px-4 inline-flex rounded-full font-semibold py-5 items-center justify-center border-cinza border-2 bg-white hover:bg-claro transition dark:bg-black dark:text-white"} >cadastre-se</button>
				</Link>
				<Link href="/signin">
					<button className={"py-2 px-4 inline-flex rounded-full font-semibold py-5 items-center justify-center bg-educk text-white hover:bg-educkdark transition"}>login</button>
				</Link>
			</Navbar>
		</header>
	);
}
