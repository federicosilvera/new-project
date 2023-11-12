import React from 'react'
import "./Home.css";


export const Home = ({people}) => {
  return (
    <>
    <div >
        {people.map(peoples=>
            <div className='main-container' key={peoples.id}>
              <div className='img-container'>{peoples.perfil} </div>
                <p className='names-container'>Name: {peoples.username} LastName: {peoples.lastname}</p>
                
            </div>
        
        )}        
    </div>
    </>
  )
}
