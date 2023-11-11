import  {Home}  from "./Home";
import React from "react";
export const FakePeople =()=>{
 const myArray=   [
                    {id:1, username:"Julia",
                    lastname:"Ramirez"},
                    {id:2, username:"Juan",
                    lastname:"Gonzalez"},
                    {id:3, username:"Claudia",
                    lastname:"Espinoza"},
                    {id:4, username:"Ramiro",
                    lastname:"Gutierrez"},
];

return(
    <>
        <h1>People:</h1>
        <Home people={myArray}/>
    </>
)
}
