import  {Home}  from "./Home";
import React from "react";
export const FakePeople =()=>{
 const myArray=   [
                    {id:1, username:"Julia",
                    lastname:"Ramirez",
                    perfil:<img width="200px" height="200px"  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen ilustrativa de Julia"></img>},
                    {id:2, username:"Juan",
                    lastname:"Gonzalez",
                    perfil:<img width="200px" height="200px" src="https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.6435-9/132805647_108884301103652_4610308687321756747_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=bUBqvqfyMMkAX-XcSsK&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfCbvZuB2BAl5OWvCPE1uz1s0UbJgoahnVW6cYaCWD5bGw&oe=6578232F" alt="Imagen ilustrativa de Juan"></img>},
                    {id:3, username:"Claudia",
                    lastname:"Espinoza",
                    perfil:<img width="200px" height="200px"  src="https://i.pinimg.com/564x/cd/b2/fe/cdb2fefaa90fa5e0d52d58dea7c2780c.jpg" alt="Imagen ilustrativa de Claudia"></img>},
                    {id:4, username:"Ramiro",
                    lastname:"Gutierrez",
                    perfil:<img width="200px" height="200px" src="https://es-static.z-dn.net/files/d31/30131a10e1b281e9e9e3c0bbf4d8abb1.jpg" alt="Imagen ilustrativa de Ramiro"></img>},
];

return(
    <>
        
        <Home people={myArray}/>
    </>
)
}
