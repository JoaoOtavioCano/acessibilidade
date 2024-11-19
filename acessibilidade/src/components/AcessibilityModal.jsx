import Card from "./Card";
import Image from "next/image";

const AcessibilityModal = ({open}) => {
    const toggle = () => {
        document.documentElement.classList.toggle("dark")
    }

    return (
        <div className={open? "bg-white shadow-lg border rounded p-2 w-fit z-50 flex flex-col md:flex-row md:gap-2" : "hidden"}>
            <button className="text-xs flex flex-col md:flex-row md:gap-1 border rounded p-1" onClick={toggle}>
                <Image src="/lightDarkMode.svg" alt="sol" height={24} width={24}  />
                Alto Contraste
            </button>
            <button className="text-xs flex flex-col md:flex-row md:gap-1 border rounded p-1">
                <Image src="/vLibras.svg" alt="mãos v libras" height={24} width={24}  />
                V Libras
            </button>
        </div>
    )
}

export default AcessibilityModal;