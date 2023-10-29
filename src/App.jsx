import MiniTeclado from "./components/MiniTeclado/MiniTeclado";
import {Image} from "@nextui-org/image";


export default function App() {
  return (
    <>
      <MiniTeclado />
      <div className="h-[100vh] bg-gray-900 text-white flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center justify-center  gap-10">
          <div className="flex items-center gap-10">
            <a href="https://www.linkedin.com/in/thaua-felipe/" target="_blank" rel="noreferrer" >
              <Image src="../public/avatar-thaua.jpeg" width={300} isBlurred isZoomed/>
            </a>
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl font-extrabold uppercase bg-purple-800 p-1">
                Projeto Criado por:
              </h1>
              <div>
                <h3 className="text-3xl">Thauã Felipe dos Santos Araújo</h3>
                <a href="https://github.com/HollowDeev" className="text-purple-500" target="_blank" rel="noreferrer">Hollow Deev</a>
              </div>
            </div>
          </div>

         <div className="flex items-center justify-between gap-5 w-full ">
          <div className="flex items-center gap-5 w-full">
              <h2 className="uppercase font-bold bg-purple-800 p-1">Tecnologias usadas: </h2>
              <img src="https://skillicons.dev/icons?i=react,threejs,tailwind" />
          </div>
          <div className="flex items-center gap-5 ">
              <h2 className="uppercase font-bold bg-purple-800 p-1 w-[220px]">Mais sobre mim: </h2>
              <a href="https://github.com/HollowDeev" target="_blank" rel="noreferrer">
                <img src="https://skillicons.dev/icons?i=github" />
              </a>
              <a href="https://www.linkedin.com/in/thaua-felipe/" target="_blank" rel="noreferrer">
                <img src="https://skillicons.dev/icons?i=linkedin" />
              </a>
          </div>
         </div>
         
        </div>
      </div>
    </>

  );
}
