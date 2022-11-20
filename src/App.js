
import { getValue } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [newsList,setNewsList] =useState([])
  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles").then((Response)=>
      Response.json()).then((data)=>{
      setNewsList(data)
      })
    },[])
  return (
    <div className="App">
     <div className='title'>
  <h1>Space News</h1>
     </div>
     <div className='newsContainer'>
      {newsList.map((value,key)=>{
        return <div key={key} className="articles" onClick={()=>{window.location.href=value.url}}>
          <h3>{value.title}</h3>
          <img src={value.imageUrl}/>
          <p>{value.summary}</p>
          <h4>{value.publishedAt}</h4>
          </div>
      })}
     </div>
    </div>
  )
}

export default App;
