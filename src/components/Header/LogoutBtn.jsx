import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{ 
            dispatch(logout())
        })
    }
  return (
    
      
     <button className='px-4 py-2 rounded-lg text-black hover:text-white hover:bg-blue-600 duration-200 transition ease-in-out'
      onClick={logoutHandler}
      >Logout</button>
   
  )
}

export default LogoutBtn
