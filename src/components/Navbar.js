import React, {useContext} from 'react';
import {BookContext} from '../contexts/BookContext'

const Navbar = () => {
  const {books} = useContext(BookContext)
  return (  
    <div>
      <h3>Navbar List</h3>
      <h4>You have {books.length} books left in store.</h4>
    </div>
  );
}
 
export default Navbar;