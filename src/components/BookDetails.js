import React, {useContext} from 'react';
import {BookContext} from '../contexts/BookContext'
const BookDetails = ({book}) => {
  
  const {removeBook} = useContext(BookContext)
 
  return ( 
    <li>
      <button onClick = {()=>removeBook(book.id)}>del</button>

      <h3>{book.title}</h3>
      <h5>{book.author}</h5>
    </li>
   );
}
 
export default BookDetails;