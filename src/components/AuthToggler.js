import React, { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext'


const AuthToggler = () => {
  const {toggleAuth} =useContext(AuthContext)
  return ( 
    <button onClick={toggleAuth}>Log in</button>       

   );
}
 
export default AuthToggler;