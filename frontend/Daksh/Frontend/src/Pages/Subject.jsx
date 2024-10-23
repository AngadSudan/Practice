import React, { useContext } from 'react'
import UserContext from '../Context/User.context'
import { NavLink,useParams } from 'react-router-dom';
function Subject() {
  const {Admin}=useContext(UserContext); //Add a delete option as well
  const {id}=useParams();

  return (
    <>
    <div>Subject</div>
    {Admin && 
      <NavLink to='upload'>
        <button className='h-[4rem] w-[4rem] grid place-items-center rounded-full border-2 border-gray-500 fixed bottom-[10rem] right-[3.5rem]'>
          ➕
        </button>
      </NavLink>
    }
    </>
  )
}

export default Subject