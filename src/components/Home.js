import React from 'react'


export const Home = ({people}) => {
  return (
    <>
    <div>
        {people.map(peoples=>
            <div key={peoples.id}>
                <p>Name: {peoples.username} LastName: {peoples.lastname}</p>
                
            </div>
        
        )}        
    </div>
    </>
  )
}
