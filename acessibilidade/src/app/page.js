import Card from "../components/Card"
import Image from "next/image";

const Courses = ({imagePath, title}) => {
  return (
    <div className="flex bg-claro w-full border-cinza border-2 rounded-full py-[8px] px-[16px] items-center mt-2 gap-x-1	">
      <Image src={imagePath} alt="course logo" width={24} height={24}></Image>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between py-16 sm:py-32 sm:px-12 max-w-[1200px] m-auto">
      <section className=" flex flex-wrap-reverse items-center lg:grid lg:grid-cols-2 lg:gap-x-12">  
        <Card className="">
          <h1 className="text-black font-extrabold text-2xl">Desperte o Gênio da Computação em Você!</h1>      
          <p className="mt-2">Transforme a forma como você aprende ciência da computação com nossa plataforma interativa e envolvente. Explore cursos que abrangem desde o pensamento computacional até algoritmos, projetados para tornar o aprendizado divertido e acessível, independentemente do seu nível de conhecimento.</p>
          <h2 className="text-educk text-lg mt-2">Descubra: <p className="text-base text-black inline-block"> Entenda os fundamentos da computação com materiais claros e objetivos.</p></h2>
          <h2 className="text-educk text-lg mt-2">Aprenda: <p className="text-base text-black inline-block"> Participe de exercícios interativos que estimulam o pensamento crítico.</p></h2>
          <h2 className="text-educk text-lg mt-2">Cresça: <p className="text-base text-black inline-block"> Desenvolva habilidades essenciais para o mercado de tecnologia.</p></h2>
          <h2 className="text-educk text-lg font-bold mt-2">Comece agora e veja até onde sua curiosidade pode te levar!</h2>
        </Card>
        <div className="w-full flex justify-center lg:w-auto mb-8">
          <Image 
            src="/coder.svg" 
            alt="Programador" 
            width={500} 
            height={363.1} 
            className="md:max-w-[500px] w-full h-auto object-cover" 
          />
        </div>
      </section>
      <section className="mt-12 flex flex-wrap w-autol items-center justify-center lg:grid lg:grid-cols-2 lg:gap-x-12"> 
      <div className="w-full flex justify-center lg:w-auto mb-8">
          <Image 
            src="/school.svg" 
            alt="Programador" 
            width={500} 
            height={363.1} 
            className="md:max-w-[500px] w-full h-auto object-cover" 
          />
        </div> 
        <Card className="w-full">
          <h1 className="text-black font-extrabold text-2xl">Cursos:</h1>
          <Courses imagePath="/logo-curso-icc.svg" title="Introdução à Ciência da Computação"></Courses>
          <Courses imagePath="/logo-curso-algoritmos.svg" title="Algoritmos e Estruturas de Dados"></Courses>
          <Courses imagePath="/logo-curso-org-arq-comp.svg" title="Organização e Arquitetura de Computadores"></Courses>
          <Courses imagePath="/logo-curso-sistemas-operacionais.svg" title="Sistemas Operacionais"></Courses>
          <Courses imagePath="/logo-curso-database.svg" title="Bases de Dados"></Courses>
        </Card>
      </section>
      <section className="mt-12 flex flex-wrap-reverse w-auto items-center justify-center lg:grid lg:grid-cols-2 lg:gap-x-12">  
        <Card className="w-full">
          <h1 className="text-black font-extrabold text-2xl">Sobre nós:</h1>
          <p className="mt-2">Bem-vindo ao nosso site dedicado à <span className="text-educk">ciência da computação</span>! Somos uma startup brasileira formada por uma equipe apaixonada por educação e tecnologia.</p>
          <p className="mt-2">Nosso objetivo é oferecer uma <span className="text-educk">abordagem inovadora</span> e <span className="text-educk">interativa</span> para o aprendizado de conceitos fundamentais de ciência da computação. Projetamos cursos que abrangem desde o pensamento computacional até algoritmos e uma introdução abrangente à ciência da computação.</p>
          <p className="mt-2">Aqui, você encontrará recursos educacionais desafiadores e envolventes, projetados para ajudá-lo a dominar habilidades essenciais para o mundo digital de hoje. Explore nosso conteúdo, participe de exercícios interativos e junte-se a uma comunidade de aprendizado apaixonada por computação.</p>
          <h2 className="text-educk text-lg font-bold mt-2">Junte-se a nós nesta jornada de descoberta e aprendizado!</h2>
        </Card>
        <div className="w-full flex justify-center lg:w-auto mb-8">
          <Image 
            src="/about-us.svg" 
            alt="Programador" 
            width={500} 
            height={363.1} 
            className="md:max-w-[500px] w-full h-auto object-cover" 
          />
        </div>
      </section>
      <section className="mt-12 flex w-full items-center justify-center">  
      </section>
	</main>
  );
}
