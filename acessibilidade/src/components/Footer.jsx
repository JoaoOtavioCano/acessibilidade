import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black flex flex-col items-center py-8 w-full md:pl-[45px] md:flex-row md:items-start
		mt-auto">
            <div className="w-[160px] sm:w-[200px]">
                <Image src="/Logo & Texto - branco.svg" alt="logo Educk" width={200} height={140}></Image>
            </div>
            <div className="m-auto">    
                <div className="flex gap-1 my-12 md:mb-4 md:my-0">
                    <Image src="/brand-instagram.svg" alt="Instagram Educk" width={24} height={24}></Image>
                    <a className="text-white" href="https://www.instagram.com/educk.tech/">https://www.instagram.com/educk.tech/</a>
                </div>
                <div className="flex gap-1">
                    <Image src="/mail.svg" alt="email Educk" width={24} height={24}></Image>
                    <a className="text-white" href="">educk.tech@gmail.com</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
