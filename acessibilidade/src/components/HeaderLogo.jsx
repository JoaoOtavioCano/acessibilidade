import Image from "next/image";
import Link from "next/link";

function HeaderLogo() {
	return (
		<Link href="/">
			<div className="flex w-[120px] gap-4 items-center mr-2 sm:w-[200px]">
				<Image src="/educk-favicon-white.svg" alt="Educk logo" height={100} width={200}  />
			</div>
		</Link>
	)
}

export default HeaderLogo;
