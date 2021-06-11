import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v1'
const SongList = () => {
  const [title, setTitle] = useState('')
  const [songs, setSongs] = useState([
  {title:'Hello world', id: uuid()}
  ])
  const [age, setAge] = useState(20)
  const addSong = (e) => {
    e.preventDefault()
    setSongs([...songs, {
      title, id:uuid()
    }])
    setTitle('')
  }
  useEffect(()=>{
    console.log('useEffect hook ran', age )
  }, [age])
  return ( 
    <div>
      <ul>
        {songs.map(song => {
          return (<li key = {song.id}>{song.title}</li>)
        })}
      </ul>
      <form>
        <input type = "text" value = {title} name="text" onChange= {(evt)=> setTitle(evt.target.value)}/>
      <button onClick={addSong}>Add a song</button>

      </form>
      <button onClick = {() =>setAge(age+1)}>Add age{age}</button>
    </div>
  );
}

export default SongList;