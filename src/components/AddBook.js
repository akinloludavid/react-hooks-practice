import React, {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext';

const AddBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const { addBook} = useContext(BookContext)
  const addNewBook =(evt) =>{
    evt.preventDefault()
    
    addBook(title, author)
    setTitle('')
    setAuthor('')
  }
  return ( 
    <div>
      <form onSubmit = {addNewBook}>
        <input placeholder= "Add title" type = "text" value ={title} required onChange = {(evt)=>setTitle(evt.target.value)}/>
        <input placeholder= "Add author" type = "text" value ={author} required onChange = {(evt)=>setAuthor(evt.target.value)}/>
        <button type = "submit">Add Book</button>
      </form>
    </div>
    

   );
}
 
export default AddBook;