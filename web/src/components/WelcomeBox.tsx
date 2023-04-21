import logoImage from "../assets/Logosmol.svg"
export function WelcomeBox(){
   
    const yudOs = 
`██╗   ██╗██╗   ██╗██████╗     ██████╗ ███████╗
 ╚██╗ ██╔╝██║   ██║██╔══██╗   ██╔═══██╗██╔════╝
  ╚████╔╝ ██║   ██║██║  ██║   ██║   ██║███████╗
   ╚██╔╝  ██║   ██║██║  ██║   ██║   ██║╚════██║
    ██║   ╚██████╔╝██████╔╝██╗╚██████╔╝███████║
    ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ ╚══════╝`;
    return(

        <span className="flex absolute ">       
            <pre className=" px-3 py-6 text-xl text-orange-500"> {yudOs} </pre>
            <img src={logoImage} className="animate-pulse px-2"></img>
        </span>
    )
}