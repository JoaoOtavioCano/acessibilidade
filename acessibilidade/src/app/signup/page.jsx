"use client";

import Card from "../../components/Card";
import Footer from "../../components/Footer";
import InputMsg from "../../components/InputMsg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
    const [emailSpan, setEmailSpan] = useState(false);
    const [passwordSpan, setPasswordSpan] = useState(false);
    const [numberCharColor, setNumberCharColor] = useState("text-red-600");
    const [specialCharColor, setSpecialCharColor] = useState("text-red-600");
    const [upercaseCharColor, setUpercaseCharColor] = useState("text-red-600");
    const [numberColor, setNumberColor] = useState("text-red-600");
    const [confirmPasswordSpan, setConfirmPasswordSpan] = useState(false);
    const ghost = 	"inline-flex rounded-full font-semibold py-5 items-center justify-center border-cinza border-2 bg-white hover:bg-claro transition py-2 px-4"
    const primary = "inline-flex rounded-full font-semibold py-5 items-center justify-center bg-educk text-white hover:bg-educkdark transition py-2 px-4"

    const emailValidation = (event) => {
        const email = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setEmailSpan(false);
            return true;
        } else {
            setEmailSpan(true);
            return false;
        }
    }

    const hasSpecialCharacter = (str) => {
        const regex = /[!@#$%^&*(),.?":{}|<>]/g;
        return regex.test(str);
    };

    function containsUppercase(str) {
        const regex = /[A-Z]/;
        return regex.test(str);
    };

    const hasNumber = (str) => {
        const regex = /\d/;
        return regex.test(str);
      };
    
    const passwordValidation = (event) => {
        const password = event.target.value;
        let validationsPassed = 0

        if (!(password?.length >= 12)){
            setNumberCharColor("text-red-600");
        } else {
            setNumberCharColor("text-green-600");
            validationsPassed++;
        }

        if (!hasSpecialCharacter(password)){
            setSpecialCharColor("text-red-600");
        } else {
            setSpecialCharColor("text-green-600");
            validationsPassed++;
        }

        if (!containsUppercase(password)){
            setUpercaseCharColor("text-red-600");
        } else {
            setUpercaseCharColor("text-green-600");
            validationsPassed++;
        }
        
        if (!hasNumber(password)){
            setNumberColor("text-red-600");
        } else {
            setNumberColor("text-green-600");
            validationsPassed++;
        }

        if(validationsPassed == 4){
            setPasswordSpan(false);
            return true;
        }else{
            setPasswordSpan(true);
            return false;
        }
    };

    const confirmPassword = (event) => {
        const passwordValue = document.getElementsByName("password")[0].value;
        const confirmPasswordValue = event.target.value;

        if (passwordValue !== confirmPasswordValue || confirmPasswordValue === "") {
            setConfirmPasswordSpan(true);
            return false;
        } else {
            setConfirmPasswordSpan(false);
            return true;
        }
    };


    const confirmAccountCreation = async () => {
        const emailField = document.getElementsByName("email")[0];
        const passwordField = document.getElementsByName("password")[0];
        const confirmPasswordField = document.getElementsByName("confirm-password")[0];

        const isEmailValid = emailValidation({target: emailField});
        const isPasswordValid = passwordValidation({target: passwordField});
        const isConfirmPasswordValid = confirmPassword({target: confirmPasswordField});

        if (!isEmailValid|| !isPasswordValid || !isConfirmPasswordValid){
            return;
        }
        
    };
    

    return(
        <div className="bg-claro">
            <Link href={"/"}>
                <button className={`z-10 absolute m-4 ${ghost}`}> home </button>
            </Link>
            <div className="flex  md:flex-row">
                <div className="bg-white hidden md:flex w-[50%] h-screen justify-center items-center">
                    <Image src="/login.svg" width={526} height={655} alt="logo Educk com desenho de um pessoa"></Image>
                </div>
                <div className="flex flex-col w-screen md:w-[50%] h-screen justify-center items-center gap-8">
                    <Image className="md:hidden" src="/educk-high-resolution-logo-transparent.svg" width={233.38} height={158.78} alt="logo Educk"></Image>
                    <Card className="flex flex-col items-center h-fit w-screen sm:w-fit">
                        <form action={confirmAccountCreation} className="flex flex-col items-center h-fit w-screen sm:w-fit" >
                            <h1 className="text-black font-extrabold text-2xl">cadastro</h1>
                            <label className="mt-2 px-2 font-bold self-start">email</label>
                            <InputMsg type="text" name="email" placeholder="exemplo@email.com" onBlur={emailValidation} span={emailSpan} errorMsg={"email inválido!"} />
                            <ul className="list-disc w-full px-[16px] mt-4 " >
                                <li className={`${numberCharColor}`} >12 caracteres</li>
                                <li className={`${specialCharColor}`} >caractere especial</li>
                                <li className={`${upercaseCharColor}`} >letra maiúscula</li>
                                <li className={`${numberColor}`} >número</li>
                            </ul>
                            <label className="mt-2 px-2 font-bold self-start">senha</label>
                            <InputMsg type="password" name="password" placeholder="1234567890A@" onChange={passwordValidation} span={passwordSpan} errorMsg={"senha inválida!"} />
                            <label className="mt-2 px-2 font-bold self-start">confirme a senha</label>
                            <InputMsg type="password" name="confirm-password" placeholder="1234567890A@"  onBlur={confirmPassword} span={confirmPasswordSpan} errorMsg={"senhas diferentes!"}  />
                            <button className={`mt-4 min-w-56 ${primary}`} >  
                                <>
                                    confirmar
                                </>
                            </button>
                        </form>
                    </Card>
                    <p>Já tem uma conta? <a className="text-educk" href="">login</a></p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp
